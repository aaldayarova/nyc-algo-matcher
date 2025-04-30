export default function NameCard({ name, website, email}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{website}</p>
            <p>{email}</p>
        </div>
    );
}