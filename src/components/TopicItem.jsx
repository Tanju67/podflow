import { Link } from "react-router-dom";

function TopicItem({ id, img, title, ep }) {
  return (
    <Link
      to={`/topics/${id}`}
      className="group font-secondary w-full cursor-pointer rounded-4xl p-4 transition-all duration-200 hover:bg-amber-50 hover:shadow-md hover:shadow-amber-500 sm:w-[46%] lg:flex-1"
    >
      <img
        className="transtion-all h-[250px] w-full rounded-4xl object-cover object-center duration-200 group-hover:scale-90"
        src={img}
        alt=""
      />
      <h3 className="mt-4 mb-2 ml-4 text-lg font-bold text-emerald-500 md:text-2xl">
        {title}
      </h3>
      <p className="ml-4 inline-block rounded-4xl bg-emerald-500 px-4 py-1 text-sm md:text-base">
        {ep} episodes
      </p>
    </Link>
  );
}

export default TopicItem;
