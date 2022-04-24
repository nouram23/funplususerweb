import Layout from "components/Layout";
import { Collapse } from "antd";
import React from "react";
const { Panel } = Collapse;

export default function CommonQuestion() {
  const [selectKeys, setSelectKeys] = React.useState([]);

  return (
    <>
      <div>
        <Layout>
          <div className="md:mt-24 mt-14 bg-[#1a1a1a] font-Roboto ">
            <div className=" max-w-5xl mx-auto flex flex-col min-h-screen md:py-56 sm:py-40 py-10 px-4  sm:px-20 xl:px-0">
              <h1 className="text-center text-4xl font-semibold">
                Түгээмэл асуултууд
              </h1>
              <div className="mt-20">
                <Collapse
                  defaultActiveKey={["1"]}
                  activeKey={selectKeys}
                  expandIconPosition="right"
                  accordion
                  onChange={(e) => setSelectKeys(e)}
                >
                  <Panel header="Асуулт 1" key="1">
                    <p>хариулт</p>
                  </Panel>
                  <Panel header="Асуулт 2" key="2">
                    <p>хариулт</p>
                  </Panel>
                  <Panel header="Асуулт 3" key="3">
                    <p>хариулт</p>
                  </Panel>
                  <Panel header="Асуулт 4" key="4">
                    <p>хариулт</p>
                  </Panel>
                  <Panel header="Асуулт 5" key="5">
                    <p>хариулт</p>
                  </Panel>
                  <Panel header="Асуулт 6" key="6">
                    <p>хариулт</p>
                  </Panel>
                  <Panel header="Асуулт 7" key="7">
                    <p>хариулт</p>
                  </Panel>
                  <Panel header="Асуулт 8" key="8">
                    <p>хариулт</p>
                  </Panel>
                  <Panel header="Асуулт 9" key="9">
                    <p>хариулт</p>
                  </Panel>
                  <Panel header="Асуулт 10" key="10">
                    <p>хариулт</p>
                  </Panel>
                </Collapse>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
