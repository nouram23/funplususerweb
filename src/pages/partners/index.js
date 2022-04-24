import Layout from "components/Layout";
import { Card, Empty } from "antd";

import React from "react";

export default function Partners() {
  return (
    <>
      <div>
        <Layout>
          <div className="md:mt-24 mt-14 bg-[#1a1a1a] font-Roboto ">
            <div className=" max-w-6xl mx-auto flex flex-col min-h-screen md:py-56 sm:py-40 py-10 px-4  sm:px-20 xl:px-0">
              <h1 className="text-center text-5xl font-semibold">
                Хамтрагч байгууллагууд
              </h1>
              <div className="mt-20  ">
                <Card>
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </Card>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
