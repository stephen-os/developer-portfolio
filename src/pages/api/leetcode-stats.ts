// pages/api/leetcode-stats.ts (Next.js API route)
// or app/api/leetcode-stats/route.ts (App Router)

import { NextApiRequest, NextApiResponse } from 'next';

interface LeetCodeGraphQLResponse {
    data: {
        matchedUser: {
            username: string;
            profile: {
                ranking: number;
            };
            submitStatsGlobal: {
                acSubmissionNum: Array<{
                    difficulty: string;
                    count: number;
                }>;
            };
        };
        allQuestionsCount: Array<{
            difficulty: string;
            count: number;
        }>;
    };
}

interface LeetCodeStats {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    totalProblems: number;
    easyTotal: number;
    mediumTotal: number;
    hardTotal: number;
    acceptanceRate: string;
    ranking: number | null;
    error?: string;
}

const LEETCODE_GRAPHQL_ENDPOINT = 'https://leetcode.com/graphql';

const GET_USER_STATS_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

async function fetchLeetCodeStats(username: string): Promise<LeetCodeStats> {
    try {
        const response = await fetch(LEETCODE_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://leetcode.com',
            },
            body: JSON.stringify({
                query: GET_USER_STATS_QUERY,
                variables: { username },
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: LeetCodeGraphQLResponse = await response.json();

        if (!data.data || !data.data.matchedUser) {
            throw new Error('User not found or invalid response');
        }

        const { matchedUser, allQuestionsCount } = data.data;

        // Parse solved problems by difficulty
        const solvedStats = matchedUser.submitStatsGlobal.acSubmissionNum.reduce(
            (acc, item) => {
                switch (item.difficulty) {
                    case 'Easy':
                        acc.easySolved = item.count;
                        break;
                    case 'Medium':
                        acc.mediumSolved = item.count;
                        break;
                    case 'Hard':
                        acc.hardSolved = item.count;
                        break;
                }
                return acc;
            },
            { easySolved: 0, mediumSolved: 0, hardSolved: 0 }
        );

        // Parse total problems by difficulty
        const totalStats = allQuestionsCount.reduce(
            (acc, item) => {
                switch (item.difficulty) {
                    case 'Easy':
                        acc.easyTotal = item.count;
                        break;
                    case 'Medium':
                        acc.mediumTotal = item.count;
                        break;
                    case 'Hard':
                        acc.hardTotal = item.count;
                        break;
                }
                return acc;
            },
            { easyTotal: 0, mediumTotal: 0, hardTotal: 0 }
        );

        const totalSolved = solvedStats.easySolved + solvedStats.mediumSolved + solvedStats.hardSolved;
        const totalProblems = totalStats.easyTotal + totalStats.mediumTotal + totalStats.hardTotal;

        // Calculate acceptance rate (this is an approximation)
        const acceptanceRate = totalProblems > 0
            ? `${((totalSolved / totalProblems) * 100).toFixed(1)}%`
            : '0%';

        return {
            totalSolved,
            ...solvedStats,
            totalProblems,
            ...totalStats,
            acceptanceRate,
            ranking: matchedUser.profile?.ranking || null,
        };
    } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        return {
            totalSolved: 0,
            easySolved: 0,
            mediumSolved: 0,
            hardSolved: 0,
            totalProblems: 0,
            easyTotal: 0,
            mediumTotal: 0,
            hardTotal: 0,
            acceptanceRate: '0%',
            ranking: null,
            error: error instanceof Error ? error.message : 'Failed to fetch stats',
        };
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({
            totalSolved: 0,
            easySolved: 0,
            mediumSolved: 0,
            hardSolved: 0,
            totalProblems: 0,
            easyTotal: 0,
            mediumTotal: 0,
            hardTotal: 0,
            acceptanceRate: '0%',
            ranking: null,
            error: 'Method not allowed',
        });
    }

    const stats = await fetchLeetCodeStats(process.env.LEETCODE_USERNAME || '');

    // Set cache headers for reasonable caching (5 minutes)
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

    return res.status(200).json(stats);
}