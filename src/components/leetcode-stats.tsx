// components/LeetCodeStatistics.tsx

import React, { useEffect, useState } from 'react';
import { leetcodeStatsCache, setLeetcodeStatsCache } from '@/lib/leetcode-stats-cache';

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

export const LeetCodeStatistics: React.FC = () => {
    const [stats, setStats] = useState<LeetCodeStats | null>(leetcodeStatsCache.stats);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(!leetcodeStatsCache.stats);

    useEffect(() => {
        if (leetcodeStatsCache.stats) {
            return;
        }

        const fetchStats = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('/api/leetcode-stats');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setStats(data);

                if (data.error) {
                    setError(data.error);
                }

                setLeetcodeStatsCache(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch LeetCode statistics.');
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <p className="text-gray-400 font-mono">Loading LeetCode statistics...</p>;
    }

    return (
        <div className="w-full max-w-screen-lg bg-neutral-800 border border-stone-700 rounded-2xl shadow-lg px-6 py-4">
            {/* Main Stats */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-6">
                <div className="text-center">
                    <p className="text-3xl font-bold text-orange-400">{stats?.totalSolved || 0}</p>
                    <p className="text-stone-400 text-sm">Total Solved</p>
                </div>
                {stats?.ranking && (
                    <div className="text-center">
                        <p className="text-2xl font-bold text-orange-400">#{stats.ranking.toLocaleString()}</p>
                        <p className="text-stone-400 text-sm">Ranking</p>
                    </div>
                )}
                <div className="text-center">
                    <p className="text-2xl font-bold text-orange-400">{stats?.acceptanceRate || "N/A"}</p>
                    <p className="text-stone-400 text-sm">Acceptance Rate</p>
                </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Easy */}
                <div className="bg-neutral-700 rounded-lg p-4 text-center flex flex-col items-center">
                    <div className="flex flex-col md:flex-row md:space-x-2 justify-between items-center mb-2 w-full sm:w-auto">
                        <span className="text-green-400 font-semibold">Easy</span>
                        <span className="text-stone-300 text-sm mt-1 sm:mt-0">
                            {stats?.easySolved || 0}/{stats?.easyTotal || 0}
                        </span>
                    </div>
                    <div className="w-full bg-neutral-600 rounded-full h-2 mb-2">
                        <div
                            className="bg-green-400 h-2 rounded-full transition-all duration-300"
                            style={{
                                width: `${stats?.easyTotal ? Math.min((stats.easySolved / stats.easyTotal) * 100, 100) : 0}%`
                            }}
                        ></div>
                    </div>
                    <p className="text-2xl font-bold text-green-400">{stats?.easySolved || 0}</p>
                </div>

                {/* Medium */}
                <div className="bg-neutral-700 rounded-lg p-4 text-center flex flex-col items-center">
                    <div className="flex flex-col md:flex-row md:space-x-2 justify-between items-center mb-2 w-full sm:w-auto">
                        <span className="text-yellow-400 font-semibold">Medium</span>
                        <span className="text-stone-300 text-sm mt-1 sm:mt-0">
                            {stats?.mediumSolved || 0}/{stats?.mediumTotal || 0}
                        </span>
                    </div>
                    <div className="w-full bg-neutral-600 rounded-full h-2 mb-2">
                        <div
                            className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                            style={{
                                width: `${stats?.mediumTotal ? Math.min((stats.mediumSolved / stats.mediumTotal) * 100, 100) : 0}%`
                            }}
                        ></div>
                    </div>
                    <p className="text-2xl font-bold text-yellow-400">{stats?.mediumSolved || 0}</p>
                </div>

                {/* Hard */}
                <div className="bg-neutral-700 rounded-lg p-4 text-center flex flex-col items-center">
                    <div className="flex flex-col md:flex-row md:space-x-2 justify-between items-center mb-2 w-full sm:w-auto">
                        <span className="text-red-400 font-semibold">Hard</span>
                        <span className="text-stone-300 text-sm mt-1 sm:mt-0">
                            {stats?.hardSolved || 0}/{stats?.hardTotal || 0}
                        </span>
                    </div>
                    <div className="w-full bg-neutral-600 rounded-full h-2 mb-2">
                        <div
                            className="bg-red-400 h-2 rounded-full transition-all duration-300"
                            style={{
                                width: `${stats?.hardTotal ? Math.min((stats.hardSolved / stats.hardTotal) * 100, 100) : 0}%`
                            }}
                        ></div>
                    </div>
                    <p className="text-2xl font-bold text-red-400">{stats?.hardSolved || 0}</p>
                </div>
            </div>
        </div>
    );
};

export default LeetCodeStatistics;
