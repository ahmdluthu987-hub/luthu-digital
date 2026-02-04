import React from 'react';

export default function DashboardHeader() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 md:gap-4 mb-6 md:mb-8">
            <div>
                <h1 className="text-xl md:text-3xl font-bold text-foreground tracking-tight">Executive Dashboard</h1>
                <p className="text-muted-foreground mt-0.5 md:mt-1 text-xs md:text-base">Real-time overview of your digital presence</p>
            </div>
            <div className="md:text-right w-full md:w-auto">
                <p className="text-xs md:text-sm font-medium text-muted-foreground/80 md:text-foreground">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
        </div>
    );
}
