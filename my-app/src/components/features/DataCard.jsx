export default function DataCard({ title, text }) {
  return (
    <div className="border-2 rounded-md border-teal-800 p-4 bg-[#fdf9f0] flex flex-col gap-2 w-full">
      <p className="data-card-title">{title}</p>
      <p className="text-xs text-teal-800 !text-xs">{text}</p>

    </div>
  );
}
