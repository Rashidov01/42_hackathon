import React from "react";
import "./evatable.scss";
import { Table } from "antd";

export default function EvaTable() {
  const columns = [
    {
      title: "#",
      key: "place",
      dataIndex: "place",
      render: (text) => <p className="table-name">{text}</p>,
    },
    {
      title: "arashido",
      dataIndex: "name",
      key: "name",
      render: () => <p className="table-text">1</p>,
    },
    {
      title: "zosobiro",
      render: () => <p className="table-text">1</p>,
    },
    {
      title: "ivaliev",
      render: () => <p className="table-text">1</p>,
    },
    {
      title: "arashido",
      render: () => <p className="table-text">1</p>,
    },
    {
      title: "zosobiro",
      render: () => <p className="table-text">1</p>,
    },
    {
      title: "ivaliev",
      render: () => <p className="table-text">1</p>,
    },
    {
      title: "arashido",
      render: () => <p className="table-text">1</p>,
    },
  ];
  const data = [
    {
      key: "1",
      place: "arashido",
    },
    {
      key: "2",
      place: "zosobiro",
    },
    {
      key: "3",
      place: "ivaliev",
    },
    {
      key: "4",
      place: "arashido",
    },
    {
      key: "5",
      place: "zosobiro",
    },
    {
      key: "6",
      place: "ivaliev",
    },
    {
      key: "7",
      place: "arashido",
    },
  ];
  return (
    <div className="table-holder">
      <Table className="custom-eva-table" columns={columns} dataSource={data} />
    </div>
  );
}
