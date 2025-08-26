import { FaRegBookmark } from "react-icons/fa";
import { FaCirclePlay, FaHeadphones, FaRegComment } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoIosTime } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";

function EpisodesItem({
  id,
  img,
  time,
  title,
  creator,
  description,
  listening,
  like,
  comment,
  download,
  ep,
}) {
  return (
    <Link
      to={`/episodes/${id}`}
      className="font-secondary flex gap-4 rounded-4xl border-4 border-emerald-500 bg-amber-50 p-6 text-black transition-all duration-200 hover:scale-[1.02] hover:border-transparent hover:shadow-md hover:shadow-amber-500 max-[480px]:flex-col"
    >
      <div className="flex w-[150px] flex-col max-[480px]:w-full">
        <div className="relative">
          <img
            src={img}
            className="h-[150px] w-[150px] rounded-2xl object-cover max-[480px]:max-h-full max-[480px]:w-full"
            alt=""
          />
          <FaCirclePlay className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 fill-amber-50" />
        </div>
        <button className="font-secondary mt-2 rounded-full bg-amber-700 px-4 py-2 text-sm text-white hover:bg-amber-600">
          Subscribe
        </button>
      </div>
      <div className="flex-1 max-[480px]:mt-4 max-[480px]:w-full">
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <IoIosTime className="text-base text-amber-700" />
            <span>{time} min</span>
          </div>
          <div>
            <span>
              Episode{" "}
              <span className="rounded-full bg-emerald-500 px-2 py-1 text-white">
                {ep}
              </span>
            </span>
          </div>
        </div>

        <h2 className="font-secondary my-2 text-xl font-bold text-emerald-500 lg:text-2xl">
          {title}
        </h2>
        <div className="mt-2 flex items-center gap-2">
          <div>
            <img
              src={creator.img}
              className="h-12 w-12 rounded-full object-cover object-top"
              alt=""
            />
          </div>
          <div className="flex flex-col text-sm">
            <span>{creator.name}</span>
            <span className="font-bold capitalize">{creator.role[0]}</span>
          </div>
        </div>
        <p className="mt-2 line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center gap-8">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <FaHeadphones className="text-amber-700" />
            <span>{listening}K</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <SlLike className="text-amber-700" />
            <span>{like}K</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <FaRegComment className="text-amber-700" />
            <span>{comment}</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <FiDownload className="text-amber-700" />
            <span>{download}</span>
          </div>
        </div>
      </div>
      <div className="flex w-1/8 flex-col items-center gap-4 max-[480px]:w-full max-[480px]:flex-row">
        <div className="rounded-full bg-black p-2 font-bold text-white">
          <SlLike />
        </div>
        <div className="rounded-full bg-black p-2 font-bold text-white">
          <FaRegBookmark />
        </div>
      </div>
    </Link>
  );
}

export default EpisodesItem;
