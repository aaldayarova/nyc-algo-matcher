import DataCard from "./DataCard";

export default function AlgoCard({ name, logo, src }) {
  return (
    <div className="algo-card p-6 rounded-lg max-w-5xl mx-auto space-y-6 shadow-md">
      {/* Top Row: Algo Name */}
      <h3>{name}</h3>
      {/* Middle Row: Left (1/3) and Right (2/3) */}
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Left Side (1/3) */}
        <div className="md:w-1/3 flex flex-col space-y-4">
          <div className="w-full h-64 flex items-center justify-center bg-teal-50 border border-teal-700 rounded-md p-6">
            <div className="w-full h-full flex items-center justify-center rounded overflow-hidden">
              <img
                src={src}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side (2/3) */}
        <div className="md:w-2/3 flex flex-col space-y-4 mt-6 md:mt-0">
          <div>
            <h3 className="font-bold text-teal-700">What is it?</h3>
            <p className="text-gray-600">[Summary of the tool]</p>
          </div>
          <div>
            <h3 className="font-bold text-teal-700">How does it work?</h3>
            <p className="text-gray-600">
              [Model type, algorithmic decision system, human oversight, etc.]
            </p>
          </div>
          <div>
            <h3 className="font-bold text-teal-700">
              How this tool might apply to you
            </h3>
            <p className="text-gray-600">
              [Specific urban actions, geographic locations, etc.]
            </p>
          </div>
        </div>
      </div>

      {/* Bottom: Data Cards full width */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <DataCard
          title="Training Data"
          text="Information used to train the model"
        />
        <DataCard
          title="Input Data"
          text="Information the model uses to arrive at a decision"
        />
        <DataCard
          title="Output Data"
          text="Decision or recommendation provided by the model"
        />
      </div>
    </div>
  );
}
