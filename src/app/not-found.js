import React from "react";
import Link from "next/link";
import Card from "@/components/Card";

export default function NotFound() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center min-h-[50vh] text-center px-4 w-full">
      <Card className="max-w-md w-full p-8 flex flex-col items-center border-t-4 border-t-brand-blue">
        <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue-dark dark:text-brand-peach text-3xl font-extrabold mb-6">
          404
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Page Not Found</h2>
        <p className="text-sm text-slate-550 dark:text-slate-400 mt-2.5 leading-relaxed">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-2.5 text-sm font-semibold transition-all shadow-sm hover:shadow dark:bg-brand-blue dark:hover:bg-brand-blue-hover w-full"
        >
          Return Home
        </Link>
      </Card>
    </div>
  );
}
