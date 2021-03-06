package com.nana.board.dao;

import com.nana.board.model.BoardVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardDao {

    public List<BoardVO> selectAll();
    public BoardVO findById(Long b_seq);
    public int insert(BoardVO boardVO);
    public int delete(Long seq);
    public int update(BoardVO boardVO);
}
