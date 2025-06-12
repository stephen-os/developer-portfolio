export interface LeetCodeStats {
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

export const leetcodeStatsCache: {
    stats: LeetCodeStats | null;
} = {
    stats: null,
};

export function setLeetcodeStatsCache(data: LeetCodeStats) {
    leetcodeStatsCache.stats = data;
}