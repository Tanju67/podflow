import { FaFacebookSquare, FaPlayCircle } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquarePinterest,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { TbClockHour3Filled } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { episodes } from "../data/data";
import SectionTitle from "./SectionTitle";

function DetailEpisode() {
  const { episodeId } = useParams();

  const { img, time, title, creator, description, ep } = episodes.find(
    (epi) => epi.id === episodeId,
  );

  return (
    <section className="font-primary bg-main px-4 py-10 text-white shadow-2xl sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1000px]">
        <SectionTitle title={`Our Episode- ${title}`} />
        <div className="flex flex-col gap-10 py-10 min-[900px]:flex-row md:gap-10">
          <div className="min-[900px]:w-3/5">
            <img
              className="h-[400px] w-full rounded-4xl object-cover min-[900px]:h-[500px]"
              src={img}
              alt=""
            />
          </div>
          <div className="min-[900px]:w-3/5">
            <div className="mb-2 flex items-center gap-4">
              <p className="flex items-center gap-2 text-emerald-500">
                <span className="">
                  <FaPlayCircle />
                </span>
                <span>Play now</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-500">
                  <TbClockHour3Filled />
                </span>
                <span>{time} Minutes</span>
              </p>
              <p className="flex items-center gap-2">
                <span>Episode</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500">
                  {ep}{" "}
                </span>
              </p>
            </div>
            <h2 className="font-secondary mb-2 text-3xl font-bold">{title}</h2>
            <p className="mb-10 italic">{description}</p>
            <div className="flex items-center justify-between rounded-4xl bg-amber-700 p-4">
              <div className="flex items-center gap-4">
                <img
                  src={creator.img}
                  alt=""
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{creator.name}</h3>
                  <p>{creator.role[0]}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaFacebookSquare className="text-3xl transition-all duration-200 hover:scale-110" />
                <FaSquareInstagram className="text-3xl transition-all duration-200 hover:scale-110" />
                <FaSquareXTwitter className="text-3xl transition-all duration-200 hover:scale-110" />
                <FaSquarePinterest className="text-3xl transition-all duration-200 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailEpisode;
