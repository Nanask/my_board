import React from "react";
import { useBoardContext } from "../context/BoardContext";
import Buttons from "./Buttons";

const Write = () => {
  const { switchModal, onChange, writeBoard } = useBoardContext();

  return (
    <div className="modal_write">
      <label>제목</label>
      <input name="b_title" onChange={onChange} />
      <label>이름</label>
      <input name="b_name" onChange={onChange} />
      <label>작성일자</label>
      <input type="date" name="b_date" onChange={onChange} />
      <label>내용</label>
      <textarea name="b_content" onChange={onChange}></textarea>
      <Buttons string1={"작성하기"} string2={"닫기"} onClick1={writeBoard} onClick2={switchModal} />
    </div>
  );
};

export default Write;
