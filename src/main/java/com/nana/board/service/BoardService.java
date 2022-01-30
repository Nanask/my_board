package com.nana.board.service;

import com.nana.board.model.BoardVO;

import java.util.List;

public interface BoardService {

    public BoardVO findById(Long seq);
    public List<BoardVO> selectAll();
    public int delete(List<Long> seqList);
    public int update(BoardVO boardVO);
    public int insert(BoardVO boardVO);

}
