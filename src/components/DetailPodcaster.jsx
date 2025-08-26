import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquarePinterest,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { useParams } from "react-router-dom";
import { people } from "../data/data";
import SectionTitle from "./SectionTitle";

function DetailPodcaster() {
  const { podcasterId } = useParams();

  const { name, role, img, description } = people.find(
    (person) => person.id === +podcasterId,
  );

  return (
    <section className="font-primary bg-main px-4 py-10 text-white shadow-2xl sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1000px]">
        <SectionTitle title={`Our Podcaster- ${name}`} />
        <div className="flex flex-col gap-4 py-10 min-[900px]:flex-row md:gap-10">
          <div className="hidden min-[900px]:block min-[900px]:w-2/5">
            <img className="w-full rounded-4xl" src={img} alt="" />
          </div>
          <div className="min-[900px]:w-3/5">
            <div className="flex gap-4">
              <div className="min-[900px]:hidden">
                <img
                  src={img}
                  className="h-24 w-24 rounded-full object-cover"
                  alt=""
                />
              </div>
              <div>
                <h3 className="mt-4 mb-2 text-3xl font-bold">{name}</h3>
                <div className="flex flex-wrap gap-4 md:gap-2">
                  {role.map((r, i) => (
                    <p
                      key={i}
                      className="rounded-2xl bg-emerald-500 px-4 py-1 text-sm text-white capitalize"
                    >
                      {r}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 italic">{description}</p>

            <div>
              <h3 className="mt-4 mb-2 text-lg font-bold">Follow Me</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FaFacebookSquare className="fill-emerald-500 text-3xl transition-all duration-200 hover:scale-110" />
                  <FaSquareInstagram className="fill-emerald-500 text-3xl transition-all duration-200 hover:scale-110" />
                  <FaSquareXTwitter className="fill-emerald-500 text-3xl transition-all duration-200 hover:scale-110" />
                  <FaSquarePinterest className="fill-emerald-500 text-3xl transition-all duration-200 hover:scale-110" />
                </div>
                <div>
                  <button className="flex items-center gap-2 rounded-4xl bg-amber-700 px-4 py-2 text-sm font-bold transition-all duration-200 hover:bg-amber-600">
                    <SiImessage className="text-3xl" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailPodcaster;
