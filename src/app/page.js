import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <div className="flex flex-col items-start gap-6">
        <PageHeader
          title="Welcome to Aegis Capstone Project"
          description="A modern, high-performance web application scaffold built with Next.js 15, App Router, and Tailwind CSS. This is the foundation of your frontend AI engineering capstone journey."
        />
        <div className="flex flex-wrap gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3 text-sm font-semibold transition-all shadow-sm hover:shadow"
          >
            Explore Dashboard
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-xl border border-slate-350 bg-white hover:bg-slate-50 text-slate-700 px-5 py-3 text-sm font-semibold transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Grid of features / pages */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-brand-blue-dark">Routed Pages Showcase</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col justify-between border-t-4 border-t-brand-blue">
            <div>
              <div className="h-10 w-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue-dark mb-4 font-bold text-sm">
                DB
              </div>
              <h3 className="text-lg font-bold text-brand-blue-dark">Interactive Dashboard</h3>
              <p className="text-sm text-slate-600 mt-2">
                View real-time statistics, system health, dynamic graphs, and core analytical cards.
              </p>
            </div>
            <Link href="/dashboard" className="text-brand-blue hover:text-brand-blue-hover text-sm font-semibold mt-4 block">
              Go to Dashboard &rarr;
            </Link>
          </Card>

          <Card className="flex flex-col justify-between border-t-4 border-t-brand-peach-dark">
            <div>
              <div className="h-10 w-10 rounded-lg bg-brand-peach/30 flex items-center justify-center text-brand-peach-dark mb-4 font-bold text-sm">
                ST
              </div>
              <h3 className="text-lg font-bold text-brand-blue-dark">Account Settings</h3>
              <p className="text-sm text-slate-600 mt-2">
                Configure your account parameters, manage notifications, and update login passwords with live validation.
              </p>
            </div>
            <Link href="/settings" className="text-brand-blue hover:text-brand-blue-hover text-sm font-semibold mt-4 block">
              Configure Settings &rarr;
            </Link>
          </Card>

          <Card className="flex flex-col justify-between border-t-4 border-t-brand-blue">
            <div>
              <div className="h-10 w-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue-dark mb-4 font-bold text-sm">
                HC
              </div>
              <h3 className="text-lg font-bold text-brand-blue-dark">System Health Check</h3>
              <p className="text-sm text-slate-600 mt-2">
                An asynchronous server component fetching external API status to verify rendering capabilities.
              </p>
            </div>
            <Link href="/health" className="text-brand-blue hover:text-brand-blue-hover text-sm font-semibold mt-4 block">
              Run Health Check &rarr;
            </Link>
          </Card>
        </div>
      </div>

      {/* Tech Stack Specs */}
      <div className="rounded-2xl border border-brand-peach-dark/30 bg-white p-8 shadow-sm">
        <h3 className="text-lg font-bold text-brand-blue-dark mb-4">Architecture & Tech Stack</h3>
        <ul className="grid gap-4 sm:grid-cols-2 text-sm text-slate-700">
          <li className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Next.js 15 (App Router, Server Components)</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Tailwind CSS (Responsive Layouts)</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Clean Component Composition Model</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Built-in Accessibility & Responsive Containers</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
