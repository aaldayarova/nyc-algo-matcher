import { Suspense } from "react";
import SurveyInner from "./SurveyInner";

export default function SurveyPage() {
  return (
    <Suspense fallback={<div>Loading survey...</div>}>
      <SurveyInner />
    </Suspense>
  );
}
