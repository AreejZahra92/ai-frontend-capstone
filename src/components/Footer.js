import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand-blue-hover bg-brand-blue py-8 text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:flex md:items-center md:justify-between">
        <p className="text-sm text-slate-100">
          &copy; {new Date().getFullYear()} Aegis Capstone Project. All rights reserved.
        </p>
        <p className="mt-4 text-sm text-slate-200 md:mt-0">
          Designed with ❤️ for the AI Frontend Engineering Track.
        </p>
      </div>
    </footer>
  );
}
