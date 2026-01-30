import React from 'react';

const OlaChart = () => {
    // Derived from sampleOlaData.csv
    const stats = {
        completed: 3,
        cancelled: 2,
        revenue: 1050,
        cancellationRate: "40.0%"
    };

    const reasons = [
        { label: "Driver Denied", value: 50, color: "#ef4444" },
        { label: "Customer No Show", value: 50, color: "#f59e0b" }
    ];

    return (
        <div className="bg-[#1a1d21] p-6 rounded-xl border border-gray-800 h-full flex flex-col justify-center">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Total Revenue</p>
                    <h4 className="text-2xl font-black text-white">₹{stats.revenue}</h4>
                </div>
                <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Cxl Rate</p>
                    <h4 className="text-xl font-bold text-[#ef4444]">{stats.cancellationRate}</h4>
                </div>
            </div>

            {/* Simple Bar Chart */}
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-[11px] mb-1.5">
                        <span className="text-gray-400">Ride Status Distribution</span>
                        <span className="text-gray-500">5 Total Rides</span>
                    </div>
                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-[#16a34a]" style={{ width: '60%' }}></div>
                        <div className="h-full bg-[#ef4444]" style={{ width: '40%' }}></div>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#16a34a]"></div>
                            <span className="text-[10px] text-gray-500">Completed (3)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
                            <span className="text-[10px] text-gray-500">Cancelled (2)</span>
                        </div>
                    </div>
                </div>

                <div className="pt-2 border-t border-gray-800">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-3">Cancellation Reasons</p>
                    <div className="space-y-2">
                        {reasons.map((r, i) => (
                            <div key={i} className="flex items-center justify-between group">
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{r.label}</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 h-1 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-gray-600" style={{ width: `${r.value}%`, backgroundColor: r.color }}></div>
                                    </div>
                                    <span className="text-[10px] font-mono text-gray-500">50%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OlaChart;
