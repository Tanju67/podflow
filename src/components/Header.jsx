import HeaderSlider from "./HeaderSlider";

function Header() {
  return (
    <section className="bg-custom min-h-screen w-full px-10 text-white md:px-20">
      <div className="flex flex-col items-center justify-center gap-20 pt-60">
        <div className="max-w-[1400px] text-center">
          <h1 className="font-secondary text-4xl font-bold text-pretty text-white sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
            Listen to Pod Flow
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Listen it everywhere. Explore your fav podcasts.
          </p>
          <button className="font-secondary mt-10 rounded-full bg-amber-700 px-10 py-3 text-sm text-white hover:bg-amber-600 sm:text-base">
            <a href="#episodes">Start listening</a>
          </button>
        </div>
        <div className="w-full max-w-[1400px]">
          <HeaderSlider />
        </div>
      </div>
    </section>
  );
}

export default Header;
