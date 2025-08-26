import aboutImg from "../assets/about.jpg";
import SectionTitle from "./SectionTitle";

function OurStory() {
  return (
    <section className="font-primary bg-main px-4 py-10 text-white shadow-2xl sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1000px]">
        <SectionTitle title="Our Story" />
        <div className="mb-10">
          <p className="mt-10 mb-4">
            At Pod Flow, we believe that stories have the power to connect
            people in meaningful ways. Our journey began with a simple idea: to
            create a space where voices could be shared freely, knowledge could
            be discovered effortlessly, and inspiration could flow without
            limits. What started as a small passion project quickly grew into a
            platform that celebrates creativity, curiosity, and community. We
            wanted to bring together podcast enthusiasts, creators, and learners
            under one roof—making it easier to explore new topics, dive deep
            into personal interests, and discover perspectives from around the
            world.
          </p>
          <p>
            But Pod Flow is more than just a platform—it’s a movement shaped by
            people who value authentic conversations and lifelong learning. We
            are driven by the belief that podcasts can educate, entertain, and
            empower listeners everywhere. Every feature we build is guided by
            this mission: to simplify discovery, highlight diverse voices, and
            inspire growth. Whether you’re here to follow your favorite
            creators, explore trending topics, or simply find your daily source
            of motivation, Pod Flow is designed for you. Together, we are
            building a community where every voice matters and every story can
            spark change.
          </p>
        </div>
        <div>
          <img className="w-full rounded-4xl" src={aboutImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default OurStory;
