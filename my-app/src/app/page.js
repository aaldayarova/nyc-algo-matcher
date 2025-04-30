import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <img src="/NYC-Algomatcher_Logo.png" alt="Algo Matcher Logo" className="landing-logo" />
        <h2>Which New York City Algorithms Use Your Data?</h2>
        <h4>New York City is the first city in the world to mandate city agencies to report on algorithmic
          tools used in decision making that may impact the public. These tools range from benefits matching
          to facial recognition. Discover which algorithmic tools may be using <b>your data</b> if you have ever lived in,
          or visited, New York City. All algorithms featured in this tool are from the 2023 report.
        </h4>

        <Button>Start Survey</Button>
        <Button>Learn More</Button>
      </main>
    </div>
  );
}
