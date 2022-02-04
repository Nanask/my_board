package com.nana.board.service.impl;

import com.nana.board.dao.BoardDao;
import com.nana.board.model.BoardVO;
import com.nana.board.service.BoardService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    private BoardDao boardDao;

    public BoardServiceImpl(BoardDao boardDao) {
        this.boardDao = boardDao;
    }

    @Override
    public BoardVO findById(Long seq) {
        BoardVO boardVO = boardDao.findById(seq);
        System.out.println("findById" + seq);
        return boardVO;
    }

    @Override
    public List<BoardVO> selectAll() {
        List<BoardVO> bList = boardDao.selectAll();
        return bList;
    }

    @Override
    public int delete(List<Long> seqList) {
//        int result = boardDao.delete(seq);
        int size = seqList.size();
        for (int i = 0 ; i < size ; i++){
            Long seq = seqList.get(i);
            boardDao.delete(seq);
        }

        return 0;
    }

    @Override
    public int update(BoardVO boardVO) {
        int result = boardDao.update(boardVO);
        System.out.println("update result" + result);
        return 0;
    }

    @Override
    public int insert(BoardVO boardVO) {
        int result = boardDao.insert(boardVO);
        System.out.println(result);

        return result;
    }
}
