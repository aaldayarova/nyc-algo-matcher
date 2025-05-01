import AlgoCard from '@/components/features/AlgoCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-4 px-8 pb-20 gap-16 sm:pt-8 sm:px-20">
      <main className="flex flex-col gap-[32px] items-center">
        <img src="/NYC-Algomatcher_Logo.png" alt="Algo Matcher Logo" className="landing-logo" />
        <h2 className="text-center">Which New York City Algorithms Use Your Data?</h2>
        <h5 className="text-center font-extralight">New York City is the first city in the world to mandate city agencies to report on algorithmic
          tools used in decision making that may impact the public. These tools range from benefits matching
          to facial recognition. Discover which algorithmic tools may be using <b>your data</b> if you have ever lived in,
          or visited, New York City. All algorithms featured in this tool are from the 2023 report.
        </h5>
        <div className="flex gap-4">
          <Button>Start Survey</Button>
          <Button>Learn More</Button>
          <AlgoCard 
            name="Test Algorithm"
            src="/NYC-Algomatcher_Logo.png"
          />
        </div>
      </main>
    </div>
  );
}
