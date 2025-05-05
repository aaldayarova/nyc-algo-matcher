import NameCard from "../../components/features/NameCard";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-center">
      <h2 className="text-4xl font-bold text-teal-900">About</h2>

      <p className="text-lg text-teal-900">
      Our team consists of graduate students in the Master of Science, Information Systems program at Cornell Tech — Cornell University's graduate tech campus in New York City. 
      We specialize in Urban Tech and Connective Media, developing products and research focused on the intersection of city governance and artificial intelligence. 
      This project was developed as part of the <em>Building Startup Systems</em> coursework, under the guidance of faculty advisors and mentors.
      </p>

      <h3 className="text-4xl font-bold text-teal-900">Team</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 justify-items-center">
        <NameCard
          name="Nikhil Jain"
          major="MS in Information Science, Conc. in Urban Tech"
          website="nikhilsjain.myportfolio.com"
          email="nikj754@gmail.com"
        />
        <NameCard
          name="Atmika Pai"
          major="MS in Information Science, Conc. in Urban Tech"
          website="atmikapai.myportfolio.com"
          email="atmikapai13@gmail.com"
        />
        <NameCard
          name="Aika Aldayarova"
          major="MS in Information Science, Conc. in Connective Media"
          email="aa2638@cornell.edu"
        />
        <NameCard
          name="Maria DeCaro"
          major="MS in Information Science, Conc. in Connective Media"
          email="msd249@cornell.edu"
        />
      </div>
      
      <h3 className="text-4xl font-bold text-teal-900">Advisors</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 justify-items-center">
        <NameCard
          name="Nikhil Garg"
          major="Professor, Operations Research and Information Engineering (ORIE) Department"
          website="gargnikhil.com"
        />
        <NameCard
          name="Ludwig Schubert"
          major="Professor, Computer Science Department"
          website="schubert.io"
        />
      </div>
    </div>
  );
}
