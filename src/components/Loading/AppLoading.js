import { Spin } from "antd";

export default function AppLoading() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Spin spinning size="large" />
    </div>
  );
}
