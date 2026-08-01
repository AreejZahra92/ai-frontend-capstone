import React from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="User Profile"
        description="View and manage your public persona and account statistics."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {/* Sidebar Avatar Card */}
        <Card className="text-center flex flex-col items-center border-t-4 border-t-brand-blue">
          <div className="relative h-24 w-24 rounded-full bg-gradient-to-tr from-brand-blue to-brand-peach flex items-center justify-center text-slate-905 text-3xl font-black shadow-md mb-4 border border-brand-peach-dark/30">
            JD
          </div>
          <h3 className="text-lg font-bold text-slate-800">Jane Doe</h3>
          <p className="text-sm text-slate-500">Senior AI Frontend Engineer</p>
          
          <div className="w-full border-t border-slate-200 my-4 pt-4 text-left space-y-2.5 text-xs text-slate-600">
            <div className="flex items-center space-x-2">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h-3a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2h-3" />
              </svg>
              <span>jane.doe@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Joined August 2026</span>
            </div>
          </div>
        </Card>

        {/* Biography & Stats */}
        <div className="md:col-span-2 space-y-6">
          <Card className="border-l-4 border-l-brand-blue">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Biography</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Jane is an experienced Frontend Architect specializing in building reactive user interfaces using Next.js, React, and CSS-in-JS solutions. She is passionate about responsive design systems, accessibility standards, and mentoring junior developers in AI-guided development workflows.
            </p>
          </Card>

          <Card className="border-l-4 border-l-brand-peach-dark">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Professional Activity</h3>
            <div className="grid gap-4 grid-cols-3 text-center">
              <div className="bg-brand-peach-light/40 p-4 rounded-xl border border-brand-peach-dark/10">
                <span className="block text-xl font-extrabold text-slate-800">42</span>
                <span className="text-xs text-slate-500 font-semibold">Projects Completed</span>
              </div>
              <div className="bg-brand-peach-light/40 p-4 rounded-xl border border-brand-peach-dark/10">
                <span className="block text-xl font-extrabold text-slate-800">1.2k</span>
                <span className="text-xs text-slate-500 font-semibold">Commits Approved</span>
              </div>
              <div className="bg-brand-peach-light/40 p-4 rounded-xl border border-brand-peach-dark/10">
                <span className="block text-xl font-extrabold text-slate-800">18</span>
                <span className="text-xs text-slate-500 font-semibold">Contributions</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
