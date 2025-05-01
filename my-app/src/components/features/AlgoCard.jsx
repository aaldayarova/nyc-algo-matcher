import DataCard from "./DataCard";
import Button from "../ui/Button";

export default function AlgoCard({
  name,
  logo,
  src,
  summary,
  use,
  application,
  datacard_title1,
  datacard_text1,
  datacard_title2,
  datacard_text2,
  datacard_title3,
  datacard_text3,
  datacard_title4,
  datacard_text4,
  datacard_title5,
  datacard_text5,
}) {
  return (
    <div className="algo-card p-6 rounded-lg max-w-5xl mx-auto space-y-6 shadow-md">
      {/* Top Row: Algo Name and Small Logo*/}
      <div className="flex items-center justify-between">
        <h3>{name}</h3>
        {/* <img
          src={logo}
          alt={`${name} logo`}
          className="w-12 h-12 object-contain"
        /> */}
      </div>

      {/* Middle Row: Left and Right */}
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Left Side */}
        <div className="md:w-1/4 flex flex-col space-y-4">
          {/* Image Box */}
          <div className="algo-image w-full h-64 flex items-center justify-center rounded-md p-2">
            <div className="w-full h-full flex items-center justify-center rounded overflow-hidden">
              <img
                src={src}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Button */}
          <Button className="algo-card-btn w-full max-w-[200px] h-auto px-4 py-2 text-base">
            Click to Learn More
          </Button>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 flex flex-col space-y-4 mt-6 md:mt-0">
          {/* Text Sections */}
          <div>
            <h4>What is it?</h4>
            <p>{summary}</p>
          </div>
          <div>
            <h4>How does it work?</h4>
            <p>{use}</p>
          </div>
          <div>
            <h4>How this tool might apply to you:</h4>
            <p>{application}</p>
          </div>

          {/* Data Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <DataCard title={datacard_title1} text={datacard_text1} />
            <DataCard title={datacard_title2} text={datacard_text2} />
            <DataCard title={datacard_title3} text={datacard_text3} />
            <DataCard title={datacard_title4} text={datacard_text4} />
            <DataCard title={datacard_title5} text={datacard_text5} />
          </div>
        </div>
      </div>
    </div>
  );
}
