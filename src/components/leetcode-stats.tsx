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
    const [loading, setLoading] = useState<boolean>(!leetcodeStatsCache.stats);

    useEffect(() => {
        if (leetcodeStatsCache.stats) {
            return;
        }

        const fetchStats = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/leetcode-stats');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: LeetCodeStats = await response.json();
                setStats(data);
                setLeetcodeStatsCache(data);
            } catch (err) {
                // Optionally log the error if needed
                console.error('Failed to fetch LeetCode statistics.', err);
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
        <div className="w-full max-w-screen-lg bg-neutral-800 rounded-2xl shadow-lg px-6 py-4">
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
                <DifficultyCard
                    label="Easy"
                    solved={stats?.easySolved || 0}
                    total={stats?.easyTotal || 0}
                    barColor="bg-green-400"
                    textColor="text-green-400"
                />

                {/* Medium */}
                <DifficultyCard
                    label="Medium"
                    solved={stats?.mediumSolved || 0}
                    total={stats?.mediumTotal || 0}
                    barColor="bg-yellow-400"
                    textColor="text-yellow-400"
                />

                {/* Hard */}
                <DifficultyCard
                    label="Hard"
                    solved={stats?.hardSolved || 0}
                    total={stats?.hardTotal || 0}
                    barColor="bg-red-400"
                    textColor="text-red-400"
                />
            </div>
        </div>
    );
};

const DifficultyCard = ({
    label,
    solved,
    total,
    barColor,
    textColor,
}: {
    label: string;
    solved: number;
    total: number;
    barColor: string;
    textColor: string;
}) => {
    const progress = total ? Math.min((solved / total) * 100, 100) : 0;

    return (
        <div className="bg-neutral-700 rounded-lg p-4 text-center flex flex-col items-center">
            <div className="flex flex-col md:flex-row md:space-x-2 justify-between items-center mb-2 w-full sm:w-auto">
                <span className={`${textColor} font-semibold`}>{label}</span>
                <span className="text-stone-300 text-sm mt-1 sm:mt-0">
                    {solved}/{total}
                </span>
            </div>
            <div className="w-full bg-neutral-600 rounded-full h-2 mb-2">
                <div
                    className={`${barColor} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className={`text-2xl font-bold ${textColor}`}>{solved}</p>
        </div>
    );
};

export default LeetCodeStatistics;
