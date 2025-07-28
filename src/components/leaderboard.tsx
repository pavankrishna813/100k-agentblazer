"use client";
interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  badges: number;
}

interface LeaderboardProps {
  entries?: LeaderboardEntry[];
}

export default function Leaderboard({ entries = [] }: LeaderboardProps) {
  // Default entries for display purposes
  const defaultEntries: LeaderboardEntry[] = [
    { rank: 1, name: "Priya Sharma", score: 2450, badges: 12 },
    { rank: 2, name: "Arjun Patel", score: 2340, badges: 11 },
    { rank: 3, name: "Sneha Kumar", score: 2220, badges: 10 },
    { rank: 4, name: "Rahul Singh", score: 2100, badges: 9 },
    { rank: 5, name: "Ananya Joshi", score: 1980, badges: 8 },
  ];

  const displayEntries = entries.length > 0 ? entries : defaultEntries;

  return (
    <div className="bg-[hsl(0,0%,96%)] rounded-xl p-8">
      <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-6 text-center">
        Current Leaderboard
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-[hsl(225,100%,60%)] text-white">
            <tr>
              <th className="px-6 py-4 text-left">Rank</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Score</th>
              <th className="px-6 py-4 text-left">Badges</th>
            </tr>
          </thead>
          <tbody>
            {displayEntries.map((entry, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td
                  className={`px-6 py-4 font-bold ${
                    entry.rank <= 3 ? "text-[hsl(225,100%,60%)]" : ""
                  }`}
                >
                  {entry.rank}
                </td>
                <td className="px-6 py-4">{entry.name}</td>
                <td className="px-6 py-4">{entry.score.toLocaleString()}</td>
                <td className="px-6 py-4">{entry.badges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
