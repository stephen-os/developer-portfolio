export let leetcodeStatsCache: {
    stats: any | null;
} = {
    stats: null,
};

export function setLeetcodeStatsCache(data: any) {
    leetcodeStatsCache.stats = data;
}
