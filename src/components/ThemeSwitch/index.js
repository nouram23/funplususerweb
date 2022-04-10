/* eslint-disable react-hooks/exhaustive-deps */
import { message, Spin } from "antd";
import { useRouter } from "next/router";
import React from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = React.useState("dark");
  const [loading, setLoading] = React.useState(true);

  const router = useRouter();

  const onChange = async (e) => {
    try {
      const req = await fetch("/api/theme", {
        method: "POST",
        body: JSON.stringify({
          theme: e ? "dark" : "white",
        }),
      });
      setTheme(e ? "dark" : "white");
      router.reload();
    } catch (err) {
      message.error("Таны үйлдлийг хийхэд алдаа гарлаа");
    }
  };

  React.useEffect(async () => {
    try {
      const req = await fetch("/api/theme", {
        method: "GET",
      });

      setTheme(req.theme);
    } catch (err) {
      message.error("Таны үйлдлийг хийхэд алдаа гарлаа");
    }
    setLoading(false);
  }, []);

  return (
    <Spin className="" spinning={loading}>
      <input
        checked={theme === "dark"}
        onChange={(e) => onChange(e.currentTarget.checked)}
        type="checkbox"
        className="checkbox"
        id="chk"
      />
      <label className="label" htmlFor="chk">
        <i className="fa fa-moon-o" />
        <i className="fa fa-sun-o" />
        <div className="ball" />
      </label>
    </Spin>
  );
}
