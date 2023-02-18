import React from "react";
import "./tab.scss";
import { Tabs, ConfigProvider } from "antd";
import Tablee from "../Table/Tablee";

export default function Tab() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Activity`,
      children: <Tablee />,
    },
    {
      key: "2",
      label: `Projects`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Logtime`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div className="tab">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1687a7",
            colorText: "#EAEAEB",
          },
        }}
      >
        <Tabs
          className="custom-tab"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </ConfigProvider>
    </div>
  );
}
