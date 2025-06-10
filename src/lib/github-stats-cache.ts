export let githubStatsCache: {
    contributions: any[][] | null;
    totalContributions: number | null;
    repoCount: number | null;
} = {
    contributions: null,
    totalContributions: null,
    repoCount: null,
};

export function setGithubStatsCache(data: {
    contributions: any[][],
    totalContributions: number,
    repoCount: number,
}) {
    githubStatsCache = data;
}
