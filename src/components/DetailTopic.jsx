import { useParams } from "react-router-dom";
import { topics } from "../data/data";
import SectionTitle from "./SectionTitle";

function DetailTopic() {
  const { topicId } = useParams();

  const { img, title, description } = topics.find(
    (topic) => topic.id === +topicId,
  );
  return (
    <section className="font-primary bg-main px-4 py-10 text-white shadow-2xl sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1000px]">
        <SectionTitle title={`Our Podcast Topic- ${title}`} />
        <div className="flex flex-col gap-10 py-10 min-[900px]:flex-row md:gap-10">
          <div className="min-[900px]:w-3/5">
            <img
              className="h-[400px] w-full rounded-4xl object-cover min-[900px]:h-auto"
              src={img}
              alt=""
            />
          </div>
          <div className="min-[900px]:w-3/5">
            <h2 className="mb-2 text-3xl font-bold">{title}</h2>
            <p className="italic">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailTopic;
