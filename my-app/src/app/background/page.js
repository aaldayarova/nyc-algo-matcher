export default function BackgroundPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-center">
      <h2 className="text-4xl font-bold text-teal-900">Algorithmic Transparency in New York City</h2>

      <p className="text-left text-teal-900">
        New York City is a world leader in publishing open datasets about all things urban. Following NYC Local Law 11 of 2012 (Open Data Law), 
        all <em>“public”</em> data used in city agencies is mandated to be made freely available on a single web portal. 
        Today, the NYC Open Data portal contains 2600 datasets with millions of data points spanning topics like housing, health, transit, inspections, policing, and more.
        <br /><br />
        Ten years after the introduction of the Open Data Law and following the advancement and proliferation of Artificial Intelligence (AI) models, the more recent <strong>Local Law 35 of 2022 now requires NYC agencies to annually report on their use of algorithmic tools, including descriptions of the tool’s use and purpose, datasets used, and vendor involvement.</strong> These algorithms assist agencies in significant decision-making processes, such as determining which public school a student applicant is matched to or how a defendant is prosecuted.
        <br /><br />
        As New Yorkers, our involvement in NYC data and algorithms varies according to our demographic information, mobility patterns, health status, public benefits usage, and more. <strong>Learning which datasets we appear in and which algorithms are processing our information can help us stay informed about our digital profiles and rights.</strong>
        <br /><br />
        It is a first step towards educating and advocating for the ethical and responsible collection and processing of our information in public systems, which is a stepping stone towards influencing the much wider-reaching algorithms used in private systems (e.g., social media feeds, online shopping, dynamic pricing) as well as in public policymaking. By enabling New York City residents and visitors to personalize their understanding of how they may show up in NYC datasets and algorithms, we aim to empower them to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-left text-teal-900">
        <li>Engage with the wealth of relevant information available on NYC Open Data</li>
        <li>Learn how data-driven decisions are made in New York City operations, especially relevant to their unique circumstances</li>
        <li>Understand the role of different stakeholders (e.g., policymakers, private vendors, academic institutions, public entities) in decisions</li>
        <li>Challenge uses of data that may be biased or harmful</li>
        <li>Influence the future design or procurement of algorithms in City agencies</li>
        <li>Advocate for fairness and equity in broader information technology advancements, especially advanced Artificial Intelligence (AI) tools</li>
        </ul>
    </div>
  );
}
