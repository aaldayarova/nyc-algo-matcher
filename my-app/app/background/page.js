"use client";

import FadeInSection from "../../components/ui/FadeInSection";

import QuoteBlock from "../../components/ui/QuoteBlock";
import { motion } from "framer-motion";


export default function BackgroundPage() {

    return (
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-center">
        <FadeInSection index={0}>
          <h2 className="text-5xl font-bold text-teal-900">
            Algorithmic Transparency in New York City
          </h2>
        </FadeInSection>
        
        <FadeInSection index={1}>
        <div className="flex flex-col md:flex-row items-center gap-12 text-left">
            <img
            src="/C. statue_of_liberty.gif"
            alt="Statue of Liberty"
            className="w-600 md:w-700 rounded-md"
            />
            <p className="text-2xl text-teal-900">
            New York City is a world leader in publishing open datasets about all things urban.
            Following NYC Local Law 11 of 2012 (Open Data Law), all <em>“public”</em> data used in city agencies is mandated to be made freely available on a single web portal.
            Today, the NYC Open Data portal contains 2600 datasets with millions of data points spanning topics like housing, health, transit, inspections, policing, and more.</p>
        </div>
        </FadeInSection>

        <FadeInSection index={2}>
          <p className="text-2xl text-left text-teal-900">
          Ten years after the introduction of the Open Data Law and following the advancement and proliferation of Artificial Intelligence (AI) models, 
          the more recent <span className="text-3xl bold"><strong>Local Law 35</strong></span> now requires NYC agencies to annually report on their use of algorithmic tools, 
            including descriptions of the tool’s use and purpose, datasets used, and vendor involvement. 
            These algorithms assist agencies in significant decision-making processes, such as
        </p>
        </FadeInSection>

        <div className="flex flex-col gap-6 md:gap-8 my-12">
        <FadeInSection index={2.25}>
            <div className="flex justify-start">
            <img
            src="/A. fire.png"
            alt="Public school matching illustration"
            className="w-15 md:w-20 rounded-md -rotate-15 mr-4"
            />
            <p className="text-xl md:text-3xl max-w-md text-left text-gray-700">
                <span className="underline">Preventing fires</span> by predicting and inspecting high-risk buildings.
            </p>
            </div>
        </FadeInSection>

        <FadeInSection index={2.5}>
        <div className="flex flex-col items-end text-right gap-4">
            <img
            src="/2. MySchools Public Schools.png"
            alt="Public school matching illustration"
            className="w-15 md:w-20 rounded-md rotate-10"
            />
            <p className="text-xl md:text-3xl max-w-md text-gray-700">
            Or determining which <span className="underline">public school a student applicant is matched to</span> 
            </p>
        </div>
        </FadeInSection>
        
        <FadeInSection index={2.75}>
        <div className="flex items-center gap-6">
            <img
            src="/B. gavel.png"
            alt="B. gavel"
            className="w-25 md:w-35 rounded-md"
            />
            <p className="text-xl md:text-3xl max-w-md text-left text-gray-700">
            or even how a defendant is <span className="underline">prosecuted.</span>
            </p>
        </div>
        </FadeInSection>
        </div>

        <FadeInSection index={3}>
        <div className="px-4 py-4 md:px-12 md:py-8">
            <QuoteBlock text="As New Yorkers, our involvement in NYC data and algorithms varies according to our demographic information, mobility patterns, health status, public benefits usage, and more. 
            Learning which datasets we appear in and which algorithms are processing our information can help us stay informed about our digital profiles and rights." />
        </div>
        </FadeInSection>

        <FadeInSection index={4}>
          <p className="text-2xl text-left text-teal-900">
          This website is a first step towards educating and advocating for the ethical and responsible collection and processing of our information in public systems, which is a stepping stone towards influencing the much wider-reaching algorithms used in private systems (e.g., social media feeds, online shopping, dynamic pricing) as well as in public policymaking. 
          By enabling New York City residents and visitors to personalize their understanding of how they may show up in NYC datasets and algorithms, we aim to empower them to:
          </p>
        </FadeInSection>
  
        <FadeInSection index={5}>
          <ul className="text-2xl list-disc list-inside space-y-2 text-left text-teal-900">
            <li>Engage with the wealth of relevant information available on NYC Open Data</li>
            <li>Learn how data-driven decisions are made in NYC operations</li>
            <li>Understand the role of stakeholders in decisions</li>
            <li>Challenge uses of data that may be biased or harmful</li>
            <li>Influence algorithm design in City agencies</li>
            <li>Advocate for fairness in AI tools</li>
          </ul>
        </FadeInSection>
      </div>
    );
  }
