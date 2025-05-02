export default function QuestionCard({ question, onAnswer, selectedAnswer }) {
    const isYes = selectedAnswer === "yes";
    const isNo = selectedAnswer === "no";
  
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 mb-6 space-y-4">
        <p className="text-lg font-semibold">{question}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => onAnswer("yes")}
            className={`custom-btn ${
              isYes ? "ring-4 ring-offset-2 text-[var(--main-text-color)]" : ""
            }`}
            style={{
              "--tw-ring-color": "var(--main-text-color)",
              backgroundColor: isYes ? "#b8e1e8" : undefined,
            }}
          >
            Yes
          </button>
          <button
            onClick={() => onAnswer("no")}
            className={`custom-btn ${
              isNo ? "ring-4 ring-offset-2 text-[var(--main-text-color)]" : ""
            }`}
            style={{
              "--tw-ring-color": "var(--main-text-color)",
              backgroundColor: isNo ? "#b8e1e8" : undefined,
            }}
          >
            No
          </button>
        </div>
      </div>
    );
}
  