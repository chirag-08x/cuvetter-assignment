import { Navbar, Sidebar, Hero, Modal } from "../../Components";
import { useGlobalContext } from "../../context/AppContext";

const Home = () => {
  const {
    state: { showModal },
  } = useGlobalContext();
  return (
    <div className="home">
      <Navbar />
      {showModal && <Modal />}

      <section className="section-center hero">
        <Sidebar />
        <Hero />
      </section>
    </div>
  );
};

export default Home;
