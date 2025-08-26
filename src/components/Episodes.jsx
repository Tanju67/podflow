import { episodes } from "../data/data";
import EpisodesItem from "./EpisodesItem";
import SectionTitle from "./SectionTitle";

function Episodes() {
  return (
    <section
      id="episodes"
      className="bg-main px-4 pt-40 pb-10 text-white sm:px-10 lg:px-20"
    >
      <SectionTitle title="Latest Episodes" />
      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-10 xl:flex-row">
        {episodes.slice(0, 2).map((episode) => (
          <EpisodesItem key={episode.id} {...episode} />
        ))}
      </div>
    </section>
  );
}

export default Episodes;
