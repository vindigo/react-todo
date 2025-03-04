import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div
        className="mx-auto text-bg-secondary p-1 mt-4"
        style={{ width: "400px" }}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
