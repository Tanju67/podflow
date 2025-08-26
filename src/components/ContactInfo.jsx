function ContactInfo() {
  return (
    <section className="bg-main px-4 py-10 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="font-secondary text-xl font-bold sm:text-2xl">
          Get in touch with us.
        </h2>
        <p className="mt-4 mb-2 flex gap-8 border-b-1 border-gray-600 py-2">
          <span className="w-20 font-bold">Phone:</span> <span>0123456789</span>
        </p>
        <p className="mt-4 mb-2 flex gap-8 border-b-1 border-gray-600 py-2">
          <span className="w-20 font-bold">Email:</span>{" "}
          <span>info@yourdomain</span>
        </p>
        <p className="mt-4 mb-2 flex gap-8 py-2">
          <span className="w-20 font-bold">Address:</span>{" "}
          <span>123 Street, City, Country</span>
        </p>
      </div>
    </section>
  );
}

export default ContactInfo;
