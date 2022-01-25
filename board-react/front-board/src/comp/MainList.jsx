import React from "react";

const MainList = () => {
  const samples = [
    {
      title: "저는 제목 ㅋ",
      name: "저는 이름 ㅋ",
      date: "2022-01-30",
      content: "저는 내용~ ㅋ",
    },
    {
      title: "저는 제목~~ ㅋ",
      name: "저는 이름 ㅋ",
      date: "2022-01-30",
      content: "저는 내용~ ㅋ",
    },
    {
      title: "저는 제목~~~ ㅋ",
      name: "저는 이름 ㅋ",
      date: "2022-01-30",
      content: "저는 내용~ ㅋ",
    },
  ];

  const trList = samples.map((sample) => {
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{sample.title}</td>
        <td>{sample.name}</td>
        <td>{sample.date}</td>
        <td>{sample.content}</td>
      </tr>
    );
  });

  return <tbody>{trList}</tbody>;
};

export default MainList;
