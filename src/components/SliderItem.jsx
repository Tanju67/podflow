import { Link } from "react-router-dom";

function SliderItem({ person, index, activeIndex }) {
  return (
    <Link
      to={`/podcasters/${person.id}`}
      className={`z-50 flex items-center justify-center ${
        index === activeIndex ? "" : "opacity-30"
      }`}
    >
      <div className="w-full cursor-pointer rounded-4xl border-4 border-transparent transition-all duration-300 hover:border-amber-700 active:hover:border-4">
        <div className="h-[250px] w-full overflow-hidden rounded-t-4xl min-[500px]:h-[400px] lg:h-[350px] lg:w-auto">
          <img
            className="w-full rounded-t-2xl object-cover object-top transition-all duration-300 hover:scale-110 lg:rounded-t-4xl"
            src={person.img}
            alt=""
          />
        </div>
        <div
          className={`font-secondary flex h-[100px] flex-col items-center justify-center rounded-b-2xl bg-amber-100 text-gray-800 lg:rounded-b-4xl`}
        >
          <h2 className="text-base font-bold md:text-lg lg:text-2xl">
            {person.name}
          </h2>
          <div className="flex gap-2">
            {person.role.map((role, index) => (
              <span
                className="rounded-4xl bg-amber-700 px-2 py-1 text-[10px] text-white md:text-sm"
                key={index}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SliderItem;
