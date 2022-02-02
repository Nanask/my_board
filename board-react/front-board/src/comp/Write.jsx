import React from "react";
import { useBoardContext } from "../context/BoardContext";
import Buttons from "./Buttons";

const Write = () => {
  const { switchModal, onChange, writeBoard, board } = useBoardContext();

  // 1. input value 바인딩
  // 2. fetch로 시퀀스에 맞는 데이터 가져오기
  // 3. 가져온 데이터 board에 셋팅
  // 4. 클릭했을 때 모달창 나오기
  return (
    <div className="modal_write">
      <label>제목</label>
      <input name="b_title" onChange={onChange} value={board.b_title} />
      <label>이름</label>
      <input name="b_name" onChange={onChange} value={board.b_name} />
      <label>작성일자</label>
      <input type="date" name="b_date" onChange={onChange} value={board.b_date} />
      <label>내용</label>
      <textarea name="b_content" onChange={onChange} value={board.b_content}></textarea>
      <Buttons string1={"작성하기"} string2={"닫기"} onClick1={writeBoard} onClick2={switchModal} />
    </div>
  );
};

export default Write;
