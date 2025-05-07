import { Suspense } from "react";
import SurveyInner from "./SurveyInner";

export const metadata = {
  title: "My Results",
  description: "See which NYC algorithms match your data",
};

export default function SurveyPage() {
  return (
    <Suspense fallback={<div>Loading survey...</div>}>
      <SurveyInner />
    </Suspense>
  );
}
