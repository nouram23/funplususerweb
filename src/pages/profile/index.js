import ProHeader from "components/ProHeader";
import Merchant from "components/Merchant";
import Footer from "components/Footer";
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <ProHeader />
      <div className="bg-[#1a1a1a] h-screen mt-24 pt-16">
        <div className="rounded-lg  max-w-screen-xl mx-auto bg-[#212121] py-12 ">
          <div className="flex justify-between px-7">
            <h1 className=" font-bold text-xl">Миний мэдээлэл</h1>
            <Link href={"/profile/update"}>
              <i className="fa-solid fa-pen-to-square cursor-pointer text-2xl"></i>
            </Link>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-user-large  mx-6 text-3xl"></i>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-1">
                <p className="text-[#a2a2a2]">Нэр</p>
                <p className="font-bold">Erdene-Uul</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Phone</p>
                <p className="font-bold">1223</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Mail</p>
                <p className="font-bold">example@gmail.com</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Address</p>
                <p className="font-bold">Mongolia</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Address</p>
                <p className="font-bold">Mongolia</p>
              </div>
              <div>
                <p className="text-[#a2a2a2]">Address</p>
                <p className="font-bold">Mongolia</p>
              </div>
            </div>
            <Link href="/auth/passwordForget">
              <p className="text-pink-500 text-sm ml-4 cursor-pointer">
                Нууц үг солих
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Merchant />
      <Footer />
    </div>
  );
}
