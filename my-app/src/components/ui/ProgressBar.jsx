export default function ProgressBar({ value }) {
    return (
      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
        <div
          className="bg-[#095a69] h-full transition-all duration-300 ease-in-out"
          style={{ width: `${value}%` }}
        />
      </div>
    );
  }
  