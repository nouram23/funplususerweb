import Layout from "components/Layout";
import React from "react";
import Item from "components/Item";
import Link from "next/link";

export default function Service() {
  return (
    <Layout>
      <div>
        <div className="md:mt-24 mt-20 bg-[#1a1a1a] ">
          <div className="mx-auto max-w-screen-2xl">
            <div className=" flex  sm:p-10 p-4">
              <ul className=" md:text-base text-sm font-light flex mx-auto justify-center flex-wrap md:px-10 sm:px-6 px-3 sm:pt-0 pt-4">
                <List
                  list={{
                    name: "Barber",
                  }}
                />
                <List
                  list={{
                    name: "Basketball",
                  }}
                />
                <List
                  list={{
                    name: "Beauty",
                  }}
                />
                <List
                  list={{
                    name: "Billiard",
                  }}
                />
                <List
                  list={{
                    name: "Bowling",
                  }}
                />
                <List
                  list={{
                    name: "Coach",
                  }}
                />
                <List
                  list={{
                    name: "Extereme",
                  }}
                />
                <List
                  list={{
                    name: "Karaoke",
                  }}
                />
                <List
                  list={{
                    name: "Manicure",
                  }}
                />
                <List
                  list={{
                    name: "Maze",
                  }}
                />
                <List
                  list={{
                    name: "Paintball",
                  }}
                />
                <List
                  list={{
                    name: "Photography",
                  }}
                />
                <List
                  list={{
                    name: "PingPong",
                  }}
                />
                <List
                  list={{
                    name: "Restourant",
                  }}
                />
              </ul>
            </div>
            <div className="bg-[#1a1a1a]  flex justify-center mx-auto items-center">
              <div className="flex justify-center flex-wrap pb-10  sm:px-10 px-2 mx-auto">
                <Item
                  item={{
                    icon: "assets/images/billiard-photo/1.png",
                    name: "Monjoy Billiard Club",
                  }}
                />
                <Item
                  item={{
                    icon: "assets/images/billiard-photo/2.png",
                    name: "Monjoy Billiard Club",
                  }}
                />
                <Item
                  item={{
                    icon: "assets/images/billiard-photo/3.png",
                    name: "Monjoy Billiard Club",
                  }}
                />
                <Item
                  item={{
                    icon: "assets/images/billiard-photo/4.png",
                    name: "Monjoy Billiard Club",
                  }}
                />
                <Item
                  item={{
                    icon: "assets/images/billiard-photo/5.png",
                    name: "Monjoy Billiard Club",
                  }}
                />
                <Item
                  item={{
                    icon: "assets/images/billiard-photo/1.png",
                    name: "Monjoy Billiard Club",
                  }}
                />
                <Item
                  item={{
                    icon: "assets/images/billiard-photo/1.png",
                    name: "Monjoy Billiard Club",
                  }}
                />
                <Item
                  item={{
                    icon: "assets/images/billiard-photo/1.png",
                    name: "Monjoy Billiard Club",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const List = ({ list }) => {
  return (
    <li className="mx-2 my-2">
      <Link href="/">
        <button className="py-1 sm:px-4 px-2 rounded-full ring-1 ring-[#9d32c2] hover:bg-gradient-to-r from-[#9d32c2] to-[#e97a34]">
          {list?.name}
        </button>
      </Link>
    </li>
  );
};
