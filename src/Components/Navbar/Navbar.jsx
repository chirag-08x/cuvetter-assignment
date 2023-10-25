import userImg from "../../assets/user.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="section-center nav-center">
        <div>
          <a href="/">
            <img src="/images/logo.svg" alt="" />
          </a>
        </div>

        <div className="user">
          <img src={userImg} alt="" />
          <p>Siddharth Jain</p>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
