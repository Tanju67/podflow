import Episodes from "./Episodes";
import Header from "./Header";
import Topic from "./Topic";
import TrendEpi from "./TrendEpi";

function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Episodes />
      <Topic />
      <TrendEpi />
    </div>
  );
}

export default Home;
