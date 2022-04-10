import Merchant from "components/Menchart";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Service() {
  return (
    <>
      <Header />
      <div className="">
        {" "}
        <div className="md:mt-24 mt-20 bg-[#1a1a1a] ">
          <div className="md:max-w-7xl  max-w-xl mx-auto py-10">
            <h1 className="md:text-4xl text-lg font-semibold text-center mb-10">
              МАНАЙХТАЙ ХАМТРАГЧ
            </h1>
          </div>
        </div>
      </div>
      <Merchant />
      <Footer />
    </>
  );
}
