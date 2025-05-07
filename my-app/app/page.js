import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-4 px-4 md:px-8 lg:px-16 pb-10 md:pb-20 gap-8 md:gap-16">
      <main className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center max-w-4xl mx-auto w-full">
        <img
          src="/NYC-Algomatcher_Logo.png"
          alt="Algo Matcher Logo"
          className="w-[120px] sm:w-[150px] lg:w-[180px] h-auto block mx-auto mt-6 sm:mt-12 lg:mt-16"
        />
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Which New York City Algorithms Use Your Data?
        </h2>
        <h5 className="text-center font-extralight text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          New York City is the first city in the world to mandate city agencies
          to report on algorithmic tools used in decision making that may impact
          the public. These tools range from benefits matching to facial
          recognition. Discover which algorithmic tools may be using{" "}
          <b>your data</b> if you have ever lived in, or visited, New York City.
          All algorithms featured in this tool are from the 2023 report.
        </h5>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
          <Link href="/survey">
            <Button>Start Survey</Button>
          </Link>
          <Link href="/background">
            <Button>Learn More</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
