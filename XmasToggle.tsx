'use client';
import React, { useEffect, useState } from 'react';

export default function XmasToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('xmas-mode');
      const val = stored === '1' || stored === 'true';
      setEnabled(val);
      const el = document.querySelector('.snow-container');
      if (el) el.classList.toggle('xmas-old', val);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    try { localStorage.setItem('xmas-mode', next ? '1' : '0'); } catch { /* ignore */ }
    const el = document.querySelector('.snow-container');
    if (el) el.classList.toggle('xmas-old', next);
  };

  return (
    <button
      aria-pressed={enabled}
      aria-label={enabled ? 'Disable Christmas mode' : 'Enable Christmas mode'}
      onClick={toggle}
      className="text-[10px] font-black border border-cyan-500/30 px-3 md:px-4 py-1.5 rounded-full hover:bg-cyan-500/12 transition-all duration-300 uppercase"
      title={enabled ? 'Disable Christmas mode' : 'Enable Christmas mode'}
    >
      {enabled ? 'Xmas On' : 'Xmas Off'}
    </button>
  );
}
