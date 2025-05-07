import { Suspense } from "react";
import SurveyInner from "./SurveyInner";

export const metadata = {
  title: "My Results",
  description:
    "Answer questions to discover which NYC algorithms match your data, too.",
  openGraph: {
    title: "My Results | NYC AlgoMatcher",
    description:
      "Answer questions to discover which NYC algorithms match your data, too.",
    url: "https://nyc-algo-matcher.vercel.app/survey",
    images: [
      {
        url: "https://nyc-algo-matcher.vercel.app/NYC-Algomatcher_Logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function SurveyPage() {
  return (
    <Suspense fallback={<div>Loading survey...</div>}>
      <SurveyInner />
    </Suspense>
  );
}
