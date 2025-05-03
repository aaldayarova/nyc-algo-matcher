export default function NameCard({ name, major, website, email }) {
    return (
      <div className="text-center space-y-1">
        <h5 className="text-lg font-semibold text-teal-900">{name}</h5>
        <p className="text-sm font-semibold text-teal-800 italic">{major}</p>
        {website && (
          <p>
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-teal-800 text-sm"
            >
              {website}
            </a>
          </p>
        )}
        <p className="text-teal-800 text-sm">{email}</p>
      </div>
    );
  }
  
  
  