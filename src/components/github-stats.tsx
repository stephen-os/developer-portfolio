import React, { useEffect, useState } from 'react';
import { githubStatsCache, setGithubStatsCache } from '@/lib/github-stats-cache';

interface ContributionDay {
    date: string;
    contributionCount: number;
}

function getColor(count: number): string {
    if (count === 0) return '#3a3a3c';
    if (count < 2) return '#9a3412';
    if (count < 5) return '#c2410c';
    if (count < 10) return '#ea580c';
    return '#f97316';
}

export const GitHubStatistics: React.FC = () => {
    const [contributions, setContributions] = useState<ContributionDay[][]>(
        githubStatsCache.contributions ?? []
    );
    const [totalContributions, setTotalContributions] = useState<number>(
        githubStatsCache.totalContributions ?? 0
    );
    const [repoCount, setRepoCount] = useState<number>(
        githubStatsCache.repoCount ?? 0
    );
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(
        githubStatsCache.contributions === null
    );

    useEffect(() => {
        // Only fetch if the cache is empty
        if (
            githubStatsCache.contributions &&
            githubStatsCache.totalContributions &&
            githubStatsCache.repoCount
        ) {
            return;
        }

        const fetchStatistics = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('/api/github-stats');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const data = await response.json();
                if (data.error) throw new Error(data.error);

                setContributions(data.contributions);
                setTotalContributions(data.totalContributions);
                setRepoCount(data.repoCount);

                setGithubStatsCache({
                    contributions: data.contributions,
                    totalContributions: data.totalContributions,
                    repoCount: data.repoCount,
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch GitHub statistics.');
            } finally {
                setLoading(false);
            }
        };

        fetchStatistics();
    }, []);

    if (loading) return <p className="text-gray-400 font-mono">Loading GitHub statistics...</p>;
    if (error) return <p className="text-red-600 font-mono">{error}</p>;

    return (
        <div className="w-full max-w-screen-lg bg-neutral-800 border border-stone-700 rounded-2xl shadow-lg px-6 py-4">
            {/* Stats Header */}
            <div className="flex justify-center gap-8 mb-6">
                <div className="text-center">
                    <p className="text-2xl font-bold text-orange-400">{repoCount}+</p>
                    <p className="text-stone-400 text-sm">Public Repos</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-orange-400">{totalContributions}+</p>
                    <p className="text-stone-400 text-sm">Contributions YTD</p>
                </div>
            </div>

            {/* Contribution Grid */}
            <div className="flex justify-center">
                <div className="flex gap-[2px] overflow-x-auto">
                    {contributions.map((week, weekIdx) => (
                        <div key={weekIdx} className="flex flex-col gap-[2px]">
                            {week.map((day: ContributionDay, dayIdx: number) => (
                                <div
                                    key={dayIdx}
                                    className="w-3 h-3 rounded"
                                    title={`${day.date}: ${day.contributionCount} contributions`}
                                    style={{ backgroundColor: getColor(day.contributionCount) }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GitHubStatistics;