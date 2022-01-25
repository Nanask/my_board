import React from "react";
import StaticButton from "./StaticButton";

const Buttons = () => {
  const onWrite = () => {
    console.log(`ㅎㅇ 작성버튼을 클릭하셨네요 ㅋ`);
  };

  const onDelete = () => {
    console.log(`ㅎㅇ 삭제버튼을 클릭하셨네요 ㅋ`);
  };
  return (
    <div className="main_buttons">
      <StaticButton onClick={onWrite}>작성하기</StaticButton>
      <StaticButton onClick={onDelete}>삭제하기</StaticButton>
    </div>
  );
};

export default Buttons;
