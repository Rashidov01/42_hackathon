import React from "react";
import "./protable.scss";
import { Table } from "antd";

export default function LeadTable() {
  const columns = [
    {
      title: "#",
      key: "place",
      dataIndex: "place",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Last submitted project",
      dataIndex: "last",
      key: "last",
    },
    {
      title: "Try",
      dataIndex: "try",
      key: "try",
    },
    {
      title: "Point",
      dataIndex: "point",
      key: "point",
    },
    {
      title: "Intra link",
      key: "action",
      render: () => (
        <a className="table-link" href="/">
          link intra
        </a>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "arashido",
      pace: 32,
      level: "12.1",
      place: 1,
      try: 1,
      point: 125,
      last: "Get_Next_Line",
    },
    {
      key: "2",
      name: "zosobiro",
      pace: 32,
      level: "12.1",
      place: 2,
      try: 1,
      point: 100,
      status: "passed",
      last: "Minishell",
    },
    {
      key: "3",
      name: "isroilo",
      pace: 32,
      point: 100,
      level: "12.1",
      last: "Minishell",
      place: 3,
      status: "passed",
      try: 1,
    },
  ];
  return (
    <div className="table-holder">
      <Table className="custom-table" columns={columns} dataSource={data} />
    </div>
  );
}
