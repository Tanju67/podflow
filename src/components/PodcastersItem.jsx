import { Link } from "react-router-dom";

function PodcastersItem({ id, img, name, role }) {
  return (
    <Link
      to={`/podcasters/${id}`}
      className="group font-secondary flex w-full cursor-pointer flex-col overflow-hidden rounded-4xl border-4 border-transparent bg-white text-black transition-all duration-200 hover:border-4 hover:border-amber-500 hover:shadow-md hover:shadow-amber-500 md:w-[46%] lg:w-[22%]"
    >
      <div>
        <img
          className="rounded-4px w-full rounded-t-4xl object-cover object-top transition-all duration-200 group-hover:scale-105 md:h-[300px]"
          src={img}
          alt=""
        />
      </div>
      <div className="p-8 md:px-4">
        <h3 className="mb-2 text-2xl font-bold">{name}</h3>
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
    </Link>
  );
}

export default PodcastersItem;
