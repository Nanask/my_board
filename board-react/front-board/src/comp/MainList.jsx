import React, { useCallback, useEffect, useState } from "react";
import { useBoardContext } from "../context/BoardContext";

const MainList = () => {
  const { getBoard, boardList, writeBoard, isModal, checkedInputs, onChangeHandler, modalOnClick, getUpdateBoard } = useBoardContext();

  // 한번만 실행
  useEffect(getBoard, [isModal]);

  const trList = boardList.map((sample) => {
    return (
      <tr data-id={sample.b_seq}>
        <td>
          <input
            type="checkbox"
            id={sample.b_seq}
            onChange={(e) => {
              onChangeHandler(e.target.checked, e.target.id);
            }}
            checked={checkedInputs.includes(`${sample.b_seq}`) ? true : false}
          />
        </td>
        <td onClick={getUpdateBoard}>{sample.b_title}</td>
        <td>{sample.b_name}</td>
        <td>{sample.b_date}</td>
        <td>{sample.b_content}</td>
      </tr>
    );
  });

  return <tbody>{trList}</tbody>;
};

export default MainList;
