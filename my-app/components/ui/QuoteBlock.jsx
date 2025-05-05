export default function QuoteBlock({ text }) {
    return (
      <div className="border-t border-b border-dotted border-teal-500 py-8 my-12">
        <p className="text-2xl md:text-3xl text-teal-500 text-left font-bold max-w-4xl mx-auto">

          {text}
        </p>
      </div>
    );
  }