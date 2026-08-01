import React from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Monitor system analytics, request metrics, and user registrations in real time."
      />

      {/* Grid of stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-5 border-t-4 border-t-brand-blue">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Visits</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-2xl font-bold text-slate-800">12,482</span>
            <span className="text-xs font-semibold text-emerald-600">+12%</span>
          </div>
        </Card>

        <Card className="p-5 border-t-4 border-t-brand-peach-dark">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Server Uptime</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-2xl font-bold text-slate-800">99.98%</span>
            <span className="text-xs font-semibold text-emerald-600">Stable</span>
          </div>
        </Card>

        <Card className="p-5 border-t-4 border-t-brand-blue">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Users</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-2xl font-bold text-slate-800">1,829</span>
            <span className="text-xs font-semibold text-brand-blue-dark">Live</span>
          </div>
        </Card>

        <Card className="p-5 border-t-4 border-t-brand-peach-dark">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">API Latency</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-2xl font-bold text-slate-800">42ms</span>
            <span className="text-xs font-semibold text-emerald-650">-4ms</span>
          </div>
        </Card>
      </div>

      {/* Visual Analytics */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <h3 className="text-lg font-bold text-brand-blue-dark mb-2">System Performance</h3>
          <p className="text-sm text-slate-500 mb-6">
            A visual overview of server throughput and memory consumption logs.
          </p>
          <div className="h-48 flex items-end justify-between gap-2 px-2 bg-slate-50 rounded-xl p-4 border border-slate-150">
            {/* Simple mock chart bars */}
            <div className="w-full bg-brand-blue/10 rounded-t-lg h-[40%]"></div>
            <div className="w-full bg-brand-blue/30 rounded-t-lg h-[55%]"></div>
            <div className="w-full bg-brand-blue/50 rounded-t-lg h-[70%]"></div>
            <div className="w-full bg-brand-blue/70 rounded-t-lg h-[65%]"></div>
            <div className="w-full bg-brand-blue rounded-t-lg h-[85%]"></div>
            <div className="w-full bg-brand-blue-dark rounded-t-lg h-[95%]"></div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-brand-blue-dark mb-2">Recent Log Triggers</h3>
          <p className="text-sm text-slate-500 mb-4">
            Recent logs from the system deployment pipeline.
          </p>
          <ul className="space-y-3.5 text-xs text-slate-600">
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold">Cron: Syncing database completed</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-brand-blue"></span>
              <span className="font-semibold">Deploy: Build successfully cached</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-brand-peach-dark"></span>
              <span className="font-semibold">SSL: Certificate expires in 45 days</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
