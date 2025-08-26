function AnotherPageHeader({ title }) {
  return (
    <div className="bg-custom pt-40 pb-30 text-white">
      <h1 className="font-secondary text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
        {title}
      </h1>
    </div>
  );
}

export default AnotherPageHeader;
