import React from "react";
import Buttons from "./Buttons";
import MainList from "./MainList";

const Main = () => {
  return (
    <table className="main_table">
      <thead>
        <tr>
          <td></td>
          <td>제목</td>
          <td>이름</td>
          <td>작성일자</td>
          <td>내용</td>
        </tr>
      </thead>
      <MainList />
      <Buttons />
    </table>
  );
};

export default Main;
