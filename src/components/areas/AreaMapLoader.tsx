"use client";

import dynamic from "next/dynamic";

/** Leaflet touches `window`, so the map is only ever rendered on the client. */
export const AreaMap = dynamic(() => import("./AreaMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#0b0b0c]">
      <span className="eyebrow animate-pulse text-slate">Loading map</span>
    </div>
  ),
});
