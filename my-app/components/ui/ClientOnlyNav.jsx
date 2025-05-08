// components/ui/ClientOnlyNav.jsx
"use client";

import dynamic from "next/dynamic";

const ShowNavWrapper = dynamic(() => import("./ShowNavWrapper"), {
  ssr: false,
});

export default function ClientOnlyNav() {
  return <ShowNavWrapper />;
}
