import React, { useEffect, useState } from "react";

const MainList = () => {
  const [board, setBoard] = useState({
    b_seq: "",
    b_title: "",
    b_name: "",
    b_date: "",
    b_content: "",
  });

  const [boardList, setBoardList] = useState([
    {
      b_seq: "",
      b_title: "저는 제목 ㅋ",
      b_name: "저는 이름 ㅋ",
      b_date: "2022-01-30",
      b_content: "저는 내용~ ㅋ",
    },
  ]);

  const getBoard = async () => {
    const res = await fetch("http://localhost:8080");
    const result = await res.json();
    setBoardList(result);
  };

  useEffect(getBoard, []);

  const trList = boardList.map((sample) => {
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{sample.b_title}</td>
        <td>{sample.b_name}</td>
        <td>{sample.b_date}</td>
        <td>{sample.b_content}</td>
      </tr>
    );
  });

  return <tbody>{trList}</tbody>;
};

export default MainList;
