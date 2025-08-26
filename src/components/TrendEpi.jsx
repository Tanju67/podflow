import { episodes } from "../data/data";
import SectionTitle from "./SectionTitle";
import TrendEpiItem from "./TrendEpiItem";

function TrendEpi() {
  return (
    <section className="bg-main px-4 py-10 text-white sm:px-10 lg:px-20">
      <SectionTitle title="Trending Episodes" />
      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col flex-wrap gap-10 sm:flex-row">
        {episodes.slice(1, 4).map((episode) => (
          <TrendEpiItem key={episode.id} {...episode} />
        ))}
      </div>
    </section>
  );
}

export default TrendEpi;
