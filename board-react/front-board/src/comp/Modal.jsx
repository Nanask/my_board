import React from "react";
import { useBoardContext } from "../context/BoardContext";
import Write from "./Write";

const Modal = () => {
  const { isModal } = useBoardContext();
  // 삼항연산자를 쓰는데, true 일때 modal이 안보이고, false일때 modal이 보이게

  return (
    <div>
      {isModal ? (
        <div className="black_modal">
          <div className="white_modal">
            <Write />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Modal;
