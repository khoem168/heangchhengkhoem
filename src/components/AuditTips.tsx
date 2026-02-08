'use client';
import React from 'react';

export default function AuditTips() {
  return (
    <div className="max-w-xl mx-auto text-center mt-8 mb-4 opacity-60 text-[11px]">
      <div className="p-3 rounded-lg bg-white/3 border border-cyan-500/10 backdrop-blur-sm">
        <strong className="block mb-1 text-xs uppercase tracking-widest">Performance & Accessibility Tips</strong>
        <ul className="text-left list-disc ml-4 space-y-1 text-[11px]">
          <li>Use optimized images (we switched hero to Next.js Image).</li>
          <li>Reduce unused JS and server-side render where possible.</li>
          <li>Ensure color contrast—we applied high-contrast gradients.</li>
          <li>Prefer semantic HTML and add alt text for images (done).</li>
        </ul>
      </div>
    </div>
  );
}
