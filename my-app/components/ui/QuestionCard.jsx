export default function QuestionCard({ question, onAnswer, selectedAnswer }) {
  const isYes = selectedAnswer === "yes";
  const isNo = selectedAnswer === "no";

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 mb-6 space-y-4">
      <p className="text-lg font-semibold">{question}</p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <button
          onClick={() => onAnswer("yes")}
          className={`
            w-full sm:w-[120px] md:w-[140px]
            py-2 px-4
            bg-[#eae3d2] 
            text-[#085a69]
            border-2 border-[#085a69]
            rounded-full
            text-base md:text-lg
            font-medium
            transition-colors duration-300
            ${isYes ? "ring-2 ring-offset-2 bg-[#b8e1e8]" : "hover:bg-[#b8e1e8]"}
          `}
          style={{
            "--tw-ring-color": "var(--main-text-color)",
            fontFamily: "var(--text-font)",
          }}
        >
          Yes
        </button>
        <button
          onClick={() => onAnswer("no")}
          className={`
            w-full sm:w-[120px] md:w-[140px]
            py-2 px-4
            bg-[#eae3d2] 
            text-[#085a69]
            border-2 border-[#085a69]
            rounded-full
            text-base md:text-lg
            font-medium
            transition-colors duration-300
            ${isNo ? "ring-2 ring-offset-2 bg-[#b8e1e8]" : "hover:bg-[#b8e1e8]"}
          `}
          style={{
            "--tw-ring-color": "var(--main-text-color)",
            fontFamily: "var(--text-font)",
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}
