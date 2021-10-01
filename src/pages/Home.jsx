import MainTabs from "../components/tabs/MainTabs";
import TopbarComplete from "../components/topbar/TopbarComplete";

const Home = (props) => {
  return (
    <>
      <TopbarComplete />
      <MainTabs {...props} />
    </>
  );
};

export default Home;
