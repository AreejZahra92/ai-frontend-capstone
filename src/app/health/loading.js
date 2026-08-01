import React from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function HealthLoading() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full animate-pulse">
      <PageHeader
        title="System Health Check"
        description="Verify system responsiveness and external dependency API integration."
      />
      
      {/* Loading main status */}
      <Card className="border-slate-200 bg-slate-100/50">
        <div className="flex items-center space-x-3">
          <div className="h-3 w-3 rounded-full bg-slate-300"></div>
          <div className="h-4 w-40 bg-slate-300 rounded"></div>
        </div>
      </Card>

      {/* Loading detail card */}
      <Card>
        <div className="h-5 w-48 bg-slate-300 rounded mb-4"></div>
        <div className="divide-y divide-slate-100">
          <div className="py-3 flex justify-between items-center">
            <div className="h-4 w-20 bg-slate-200 rounded"></div>
            <div className="h-4 w-12 bg-slate-200 rounded"></div>
          </div>
          <div className="py-3 flex justify-between items-center">
            <div className="h-4 w-24 bg-slate-200 rounded"></div>
            <div className="h-4 w-32 bg-slate-200 rounded"></div>
          </div>
          <div className="py-3 flex justify-between items-center">
            <div className="h-4 w-28 bg-slate-200 rounded"></div>
            <div className="h-4 w-16 bg-slate-200 rounded"></div>
          </div>
        </div>
      </Card>
    </div>
  );
}
