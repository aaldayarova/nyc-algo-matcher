import NameCard from '@components/features/NameCard'

export default function ContactPage() {
    return (
        <div>
            <h2>About</h2>
            <p>Nikhil Jain and Atmika Pai are graduate students in the Master of Science, Information Systems program at Cornell Tech -- 
            Cornell University's graduate tech campus in New York City. They specialize in Urban Tech, developing products and research 
            focused on the intersection of city governance and artificial intelligence.</p>

            <NameCard
                name="Nikhil Jain"
                website="nikhilsjain.myportfolio.com"
                email="nikj754@gmail.com"
            />
            <NameCard
                name="Atmika Pai"
                website="atmikapai.myportfolio.com"
                email="atmikapai13@gmail.com"
            />
        </div>
    )
}