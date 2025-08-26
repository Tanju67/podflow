import SectionTitle from "./SectionTitle";

function ContactForm() {
  return (
    <section className="bg-main px-4 py-10 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1000px]">
        <SectionTitle title="Contact Form" />
        <form className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              className="w-full rounded-2xl bg-amber-50 px-4 py-2 placeholder:text-gray-500 focus:bg-amber-200 focus:outline-2 focus:outline-amber-700"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="w-full rounded-2xl bg-amber-50 px-4 py-2 placeholder:text-gray-500 focus:bg-amber-200 focus:outline-2 focus:outline-amber-700"
              type="email"
              placeholder="Email address"
            />
          </div>
          <input
            className="w-full rounded-2xl bg-amber-50 px-4 py-2 placeholder:text-gray-500 focus:bg-amber-200 focus:outline-2 focus:outline-amber-700"
            type="text"
            placeholder="Company"
          />
          <textarea
            name="description"
            placeholder="Describe message here"
            id=""
            className="w-full rounded-2xl bg-amber-50 px-4 py-2 placeholder:text-gray-500 focus:bg-amber-200 focus:outline-2 focus:outline-amber-700"
          ></textarea>
          <button className="font-secondary mt-4 rounded-full bg-amber-700 px-4 py-2 text-sm text-white hover:bg-amber-600 sm:text-base md:text-lg lg:self-end lg:text-xl xl:text-2xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
