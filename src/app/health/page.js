import React from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export const dynamic = "force-dynamic";

async function fetchTodoData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com";
  const res = await fetch(`${apiUrl}/todos/1`, {
    cache: "no-store", 
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch health check data: ${res.status}`);
  }
  
  return res.json();
}

export default async function HealthPage() {
  let todo = null;
  let error = null;

  try {
    todo = await fetchTodoData();
  } catch (err) {
    error = err.message;
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full">
      <PageHeader
        title="System Health Check"
        description="Verify system responsiveness and external dependency API integration."
      />

      {error ? (
        <Card className="border-rose-200 bg-rose-50/50">
          <div className="flex items-start space-x-3 text-rose-800">
            <svg className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="text-base font-bold">API Integration Error</h3>
              <p className="text-sm mt-1">Failed to resolve downstream API endpoint. The health check failed with status:</p>
              <code className="block mt-2 rounded bg-rose-100 p-2 text-xs font-mono select-all">
                {error}
              </code>
            </div>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          {/* Main Status Indicator */}
          <Card className="border-emerald-200 bg-emerald-50">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <h3 className="text-base font-bold text-emerald-800">
                All Systems Operational
              </h3>
            </div>
          </Card>

          {/* Fetched Data Card */}
          <Card className="border-t-4 border-t-brand-blue">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Downstream Dependency Data</h3>
            
            <div className="divide-y divide-slate-100">
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="text-slate-550 font-semibold">Task ID</span>
                <span className="font-mono text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-xs font-semibold border border-slate-200">
                  {todo.id}
                </span>
              </div>
              
              <div className="py-3 flex justify-between items-start text-sm">
                <span className="text-slate-550 font-semibold pr-4">Task Title</span>
                <span className="text-slate-800 text-right font-medium">
                  {todo.title}
                </span>
              </div>

              <div className="py-3 flex justify-between items-center text-sm">
                <span className="text-slate-550 font-semibold">Integration Status</span>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800`}>
                  {todo.completed ? "Completed (Healthy)" : "Pending (Healthy)"}
                </span>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
