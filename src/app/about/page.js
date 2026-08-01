import React from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="About Aegis"
        description="Learn more about the purpose, background, and goals of the Aegis Capstone Project."
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-brand-blue">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Project Vision</h3>
          <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
            The Aegis project is conceived as a modular, state-of-the-art scaffold that serves as a demonstration for best practices in modern web development. It leverages Next.js 15, React 19, and Tailwind CSS to implement high-speed rendering, fluid responsive styling, and accessible user interaction models.
          </p>
        </Card>

        <Card className="border-l-4 border-l-brand-peach">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">AI-Driven Engineering</h3>
          <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
            Built as part of the Frontend AI Engineering track, this scaffold focuses on creating reusable, semantic markup combined with modern software architectures. It demonstrates how autonomous coding agents can design, document, and build production-grade web applications.
          </p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Key Milestones</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-xs font-semibold text-brand-blue-dark dark:text-brand-peach mr-3 mt-0.5">1</span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Workspace Clean & Scaffold</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Scaffolded Next.js 15 App Router using non-interactive scripts.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-peach/20 dark:bg-brand-peach/30 text-xs font-semibold text-brand-peach-dark dark:text-brand-peach mr-3 mt-0.5">2</span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Aesthetic Design System</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Implemented rich Tailwind-based layouts, a collapsible Navbar, and rounded Card layouts.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 text-xs font-semibold text-brand-blue-dark dark:text-brand-peach mr-3 mt-0.5">3</span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Server-side Health Fetching</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Established a robust Server Component endpoint for external API checks.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
