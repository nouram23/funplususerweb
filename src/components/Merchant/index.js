import Link from "next/link";

export default function Merchant() {
  return (
    <>
      <div className="md:h-96 h-72 w-full flex flex-col justify-center items-center relative ">
        <img
          className="absolute left-0 top-0 h-full w-full"
          src="/assets/images/slider/bg/2-1.jpg"
          alt="FunPlus bg"
        />
        <div className="space-y-7 z-10">
          <h1 className="font-bold text-3xl ">МЕРЧАНТ</h1>
          <p className="text-center">Уйдах завгүй</p>
          <div className="">
            <Link href="/become-merchant">
              <a className="ml-3 rounded-full px-4 py-2 bg-gradient-to-r from-[#9d32c2] to-[#e97a34]">
                Мерчант болох
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
