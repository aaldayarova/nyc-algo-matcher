import AlgoCard from "@/components/features/AlgoCard";
import Button from "@/components/ui/Button";
import Link from "next/link";


export default function LandingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-4 px-8 pb-20 gap-16 sm:pt-8 sm:px-20">
      <main className="flex flex-col gap-[32px] items-center">
        <img
          src="/NYC-Algomatcher_Logo.png"
          alt="Algo Matcher Logo"
          className="landing-logo"
        />
        <h2 className="text-center">
          Which New York City Algorithms Use Your Data?
        </h2>
        <h5 className="text-center font-extralight">
          New York City is the first city in the world to mandate city agencies
          to report on algorithmic tools used in decision making that may impact
          the public. These tools range from benefits matching to facial
          recognition. Discover which algorithmic tools may be using{" "}
          <b>your data</b> if you have ever lived in, or visited, New York City.
          All algorithms featured in this tool are from the 2023 report.
        </h5>
        <div className="flex gap-4">
        <Link href="/survey">
          <Button>Start Survey</Button>
        </Link>
          <Button>Learn More</Button>
          <AlgoCard
            name="Facial Recognition (New York Police Department)"
            src="/6. Facial Recognition.png"
            summary="An image-matching tool used to assist in identifying individuals in city investigations."
            use="It compares input images to reference databases and returns possible matches with ranked confidence levels."
            application="If an image of you was included in a DOI case, this tool could have been used to identify you."
            datacard_title1="Training Data"
            datacard_text1="Not disclosed."
            datacard_title2="Input Data"
            datacard_text2="Still images or video frames."
            datacard_title3="Output Data"
            datacard_text3="Ranked identity matches."
            datacard_title4="Vendor Involvement"
            datacard_text4="Commercial software (vendor not named)."
            datacard_title5="Identifying Information"
            datacard_text5="Yes — biometric data is used."
          />
        </div>
      </main>
    </div>
  );
}
