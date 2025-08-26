import { people } from "../data/data";
import PodcastersItem from "./PodcastersItem";
import SectionTitle from "./SectionTitle";

function Podcasters() {
  return (
    <section className="bg-main px-4 py-10 text-white sm:px-10 lg:px-20">
      <SectionTitle title="Meet Our Podcasters" />
      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col flex-wrap gap-10 sm:flex-row">
        {people.map((person) => (
          <PodcastersItem key={person.id} {...person} />
        ))}
      </div>
    </section>
  );
}

export default Podcasters;
