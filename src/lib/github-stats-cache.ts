export interface ContributionDay {
    date: string;
    contributionCount: number;
}

export interface GitHubStats {
    contributions: ContributionDay[][];
    totalContributions: number;
    repoCount: number;
}

export let githubStatsCache: {
    contributions: ContributionDay[][] | null;
    totalContributions: number | null;
    repoCount: number | null;
} = {
    contributions: null,
    totalContributions: null,
    repoCount: null,
};

export function setGithubStatsCache(data: GitHubStats) {
    githubStatsCache = {
        contributions: data.contributions,
        totalContributions: data.totalContributions,
        repoCount: data.repoCount,
    };
}
