import Layout from "components/Layout";
import React from "react";
import Item from "components/Item";
import Link from "next/link";
import { useRouter } from "next/router";
import { query } from "apis/service_type";

export default function Service() {
  // const [detailed, setDetailed] = React.useState([]);
  // const [allServiceType, setTypes] = React.useState([]);

  // React.useEffect(async () => {
  //   const result = await fetch("/api/serviceDetail");
  //   const names = await fetch("/api/allServiceType");
  //   const data = await result.json();
  //   const serviceNames = await names.json();
  //   setDetailed(data);
  //   setTypes(serviceNames);
  // }, []);

  const [_q, set_Q] = React.useState({
    filter: {
      query: "",
    },
    offset: {
      page: 1,
      limit: 20,
    },
  });

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(true);

  const reload = React.useCallback(
    async ({ filter, offset }) => {
      if (loading) {
        return;
      }

      try {
      } catch (err) {}
    },
    [_q, loading, data]
  );

  React.useEffect(async () => {
    const response = await fetch("/api/v1/public/service_types");
    const types = await response.json();
    setData(types);
    setLoading(false);
  }, []);

  return (
    <Layout>
      <div>
        <div className="md:mt-24 mt-14  bg-[#1a1a1a] ">
          <div className="mx-auto max-w-screen-2xl">
            <div className=" flex  sm:p-10 p-4">
              <ul className="max-w-screen-xl md:text-base text-sm font-light flex mx-auto justify-center flex-wrap sm:pt-0 pt-4">
                <List
                  list={{
                    loading: loading,
                    name: "All",
                    id: "",
                  }}
                />
                {data.map((el, i) => (
                  <List
                    key={i}
                    list={{
                      loading: loading,
                      ...el,
                    }}
                  />
                ))}
              </ul>
            </div>
            <div className="bg-[#1a1a1a]  flex justify-center mx-auto items-center">
              <div className="flex justify-center flex-wrap pb-10  sm:px-10 px-2 mx-auto">
                {data.map((el, i) => (
                  <Item
                    key={i}
                    item={{
                      ...el,
                      loading: loading,
                    }}
                    id={el.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const List = ({ list }) => {
  if (list?.loading) {
    return (
      <div className="service-item md:w-56 md:h-[275px] w-36  h-48 bg-[#212121] md:p-4 p-2  md:rounded-3xl rounded-2xl hover:bg-gradient-to-r from-[#9d32c2] to-[#e97a34] md:mx-3 md:my-3 xs:mx-4 xs:my-4  mx-1 my-2">
        <Skeleton.Avatar
          className="md:w-48 md:h-52  w-32 h-36"
          shape="square"
          style={{ width: "100% !important" }}
          active
        />
        <div className="mt-2 px-2 w-full">
          <Skeleton.Input active style={{ width: "100% !important" }} />
        </div>
      </div>
    );
  }
  const router = useRouter();
  return (
    <li className="mx-2 my-2">
      <Link href={`/service?service_type=${list.id}`}>
        <button
          className={`py-1 sm:px-4 px-2 rounded-full ring-1 ring-[#9d32c2] hover:bg-gradient-to-r from-[#9d32c2] to-[#e97a34] ${
            list.id === router.query.service_type ? "bg-gradient-to-r" : ""
          }`}
        >
          {list?.name}
        </button>
      </Link>
    </li>
  );
};
