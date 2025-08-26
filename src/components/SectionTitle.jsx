function SectionTitle({ title }) {
  return (
    <div className="mx-auto flex max-w-[1400px] items-center">
      <h1 className="font-secondary rounded-2xl bg-amber-700 px-2 py-1 text-base font-bold md:text-xl lg:text-3xl">
        {title}
      </h1>
      <hr className="flex-1 text-amber-700" />
    </div>
  );
}

export default SectionTitle;
