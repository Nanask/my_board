import React, { useState } from "react";
import { useBoardContext } from "../context/BoardContext";
import Buttons from "./Buttons";
import MainList from "./MainList";

const Main = () => {
  const { switchModal, deleteBoard } = useBoardContext();

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
      <Buttons onClick1={switchModal} onClick2={deleteBoard} string1={"작성하기"} string2={"삭제하기"} />
    </table>
  );
};

export default Main;
