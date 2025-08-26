import React from "react";
import SectionTitle from "./SectionTitle";
import { topics } from "../data/data";
import TopicItem from "./TopicItem";

function Topic() {
  return (
    <section
      id="topics"
      className="bg-main px-4 py-10 text-white sm:px-10 lg:px-20"
    >
      <SectionTitle title="Topics" />
      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col flex-wrap gap-10 sm:flex-row">
        {topics.map((topic) => (
          <TopicItem key={topic.id} {...topic} />
        ))}
      </div>
    </section>
  );
}

export default Topic;
