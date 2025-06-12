// pages/api/github-statistics.ts

import { NextApiRequest, NextApiResponse } from 'next';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

interface ContributionDay {
    date: string;
    contributionCount: number;
}

interface GitHubGraphQLError {
    message: string;
    locations?: { line: number; column: number }[];
    path?: string[];
    extensions?: Record<string, unknown>;
}

interface GitHubStatisticsResponse {
    data: {
        user: {
            contributionsCollection: {
                contributionCalendar: {
                    totalContributions: number;
                    weeks: Array<{
                        contributionDays: ContributionDay[];
                    }>;
                };
            };
            repositories: {
                totalCount: number;
            };
        };
    };
    errors?: GitHubGraphQLError[];
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const username = "stephen-os";
    const token = process.env.GITHUB_TOKEN || '';

    if (!token) {
        return res.status(500).json({ error: 'GitHub token not configured' });
    }

    const from = `${new Date().getFullYear()}-01-01T00:00:00Z`;

    const query = `
        query {
            user(login: "${username}") {
                contributionsCollection(from: "${from}") {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                            }
                        }
                    }
                }
                repositories(privacy: PUBLIC, first: 100) {
                    totalCount
                }
            }
        }
    `;

    try {
        const response = await fetch(GITHUB_GRAPHQL_API, {
            method: 'POST',
            headers: {
                Authorization: `bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        const json: GitHubStatisticsResponse = await response.json();

        if (json.errors) {
            console.error('GitHub API errors:', json.errors);
            return res.status(500).json({ error: 'Failed to fetch from GitHub API' });
        }

        const userData = json.data.user;
        const contributionCalendar = userData.contributionsCollection.contributionCalendar;

        const contributions = contributionCalendar.weeks.map(week => week.contributionDays);
        const totalContributions = contributionCalendar.totalContributions;
        const repoCount = userData.repositories.totalCount;

        res.status(200).json({
            contributions,
            totalContributions,
            repoCount
        });
    } catch (error) {
        console.error('Error fetching GitHub statistics:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}