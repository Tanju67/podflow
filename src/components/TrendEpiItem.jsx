import { FaRegBookmark } from "react-icons/fa";
import { FaHeadphones, FaRegComment } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";

function TrendEpiItem({
  id,
  img,
  title,
  creator,
  description,
  listening,
  like,
  comment,
}) {
  return (
    <Link
      to={`/episodes/${id}`}
      className="font-secondary z-50 rounded-2xl bg-emerald-500 p-8 text-gray-800 transition-all duration-200 hover:scale-[1.02] hover:bg-emerald-100 hover:shadow-md hover:shadow-emerald-500 md:flex-1"
    >
      <div className="relative">
        <img
          className="h-[250px] w-full cursor-pointer rounded-2xl object-cover"
          src={img}
          alt=""
        />
        <div className="absolute right-2 bottom-2 flex gap-2">
          <div className="rounded-full bg-black p-2 font-bold text-white">
            <SlLike />
          </div>
          <div className="rounded-full bg-black p-2 font-bold text-white">
            <FaRegBookmark />
          </div>
        </div>
      </div>
      <h3 className="mx-2 mt-2 text-xl font-bold text-amber-700">{title}</h3>
      <div className="mx-2 mt-2 flex items-center gap-2">
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
      <p className="mx-2 mt-2 line-clamp-2">{description}</p>
      <div className="mx-2 mt-4 flex items-center justify-between gap-8">
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
      </div>
    </Link>
  );
}

export default TrendEpiItem;
