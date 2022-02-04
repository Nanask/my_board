import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const appContext = createContext();
export const useBoardContext = () => {
  return useContext(appContext);
};

const BoardContext = ({ children }) => {
  const [board, setBoard] = useState({
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

  const onChange = (e) => {
    const { value, name } = e.target;
    setBoard({ ...board, [name]: value });
  };

  // state 만들기 , flag
  const [isModal, setIsModal] = useState(false);

  // controller에서 받은 값
  // useEffect를 통해 처음 실행되는 때에 랜더링해서 보여주기
  const getBoard = useCallback(async () => {
    const res = await fetch("http://localhost:8080");
    const result = await res.json();
    // console.log(result);
    setBoardList(result);
  });

  // 글을 작성 후 저장하기 버튼을 클릭하면 getBoard를 마지막에 실행시켜 받은 값들을 다시 랜더링
  const writeBoard = useCallback(async () => {
    const res = await fetch("http://localhost:8080/write", {
      method: "POST",
      body: JSON.stringify(board),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // controller return 값
    const result = await res.text();
    // json으로 데이터를 받으면 컨트롤러에서 json형태로 넘겨주지 않았을경우 오류가 발생할 수 있음
    // const result = res.json;
    setIsModal(!isModal);
    console.log("result", result);
    // getBoard();
  });

  const modalOnClick = (e) => {
    switchModal();
  };

  const getUpdateBoard = async (e) => {
    const b_seq = e.target.closest("TR").dataset.id;
    switchModal();
    console.log("b_seq", b_seq);
    const res = await fetch(`http://localhost:8080/update/${b_seq}`);
    // const result = await res.json();
    const result = await res.text();
    console.log("result 있으면", result);
    setBoard({ ...board, b_title: result.b_title, b_name: result.b_name, b_date: result.b_date, b_content: result.b_content });
    console.log("setBoard", board);
  };

  const deleteBoard = async () => {
    const res = await fetch("http://localhost:8080/delete", {
      method: "POST",
      body: JSON.stringify(checkedInputs),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    const result = res.text();
    if (result) {
      alert("삭제합니다.");
    }
    console.log("result", result);
    getBoard();
  };

  const [checkedInputs, setCheckedInputs] = useState([]);

  const onChangeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      console.log(checkedInputs);
    } else {
      setCheckedInputs(checkedInputs.filter((check) => check !== id));
      console.log(checkedInputs);
    }
  };

  const switchModal = () => {
    isModal ? setIsModal(false) : setIsModal(true);
  };

  const props = {
    board,
    boardList,
    setBoardList,
    getBoard,
    isModal,
    setIsModal,
    switchModal,
    onChange,
    writeBoard,
    setCheckedInputs,
    checkedInputs,
    onChangeHandler,
    deleteBoard,
    modalOnClick,
    getUpdateBoard,
  };

  return <appContext.Provider value={props}>{children}</appContext.Provider>;
};

export default BoardContext;
