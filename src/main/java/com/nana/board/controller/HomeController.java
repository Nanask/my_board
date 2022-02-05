package com.nana.board.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nana.board.model.BoardVO;
import com.nana.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class HomeController {

    protected final BoardService bService;

    @ResponseBody
    @RequestMapping(value = {"","/"}, method = RequestMethod.GET)
    public String main() {

        List<BoardVO> bList = bService.selectAll();

        ObjectMapper objMapper = new ObjectMapper();
        String jsonString = null;
        try {
            jsonString = objMapper.writeValueAsString(bList);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            System.out.println("Json 오류");
        }

        return jsonString;
    }
    @ResponseBody
    @RequestMapping(value = "/write", method = RequestMethod.POST)
    public String write(@RequestBody BoardVO boardVO) {

        if(boardVO != null){
            System.out.println(boardVO);
            int result = bService.insert(boardVO);
            if(result != 1){
                return "SQL 오류 !";
            }
            return "OK";
        }

        return "FAIL";
    }
    @ResponseBody
    @RequestMapping(value = "/delete", method=RequestMethod.POST)
    public String delete(@RequestBody List<Long> seqList) {

        if(seqList != null) {
            System.out.println("seqList" + seqList);
            bService.delete(seqList);
            return "OK";
        }
        return "FAIL";
    }

    @ResponseBody
    @RequestMapping(value = "/update/{b_seq}", method = RequestMethod.GET)
    public String update( @PathVariable("b_seq") Long b_seq, BoardVO boardVO){

        if(b_seq != null) {
            System.out.println("b_seq" + b_seq);
            boardVO = bService.findById(b_seq);
            ObjectMapper objMapper = new ObjectMapper();
            String jsonString = null;
            try {
                jsonString = objMapper.writeValueAsString(boardVO);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
                System.out.println("Json 오류");
            }

            return jsonString;
//            boardVO = bService.findById(boardVO.getB_seq());
//            System.out.println("boardVO, controller" + boardVO);
//            return boardVO.toString();
        }
        return "FAIL";
    }

    @ResponseBody
    @RequestMapping(value = "/update", method=RequestMethod.POST)
    public String update(@RequestBody BoardVO boardVO){

        if(boardVO != null) {
            System.out.println("update" + boardVO);
            int result = bService.update(boardVO);
            if(result != 1) {
                System.out.println("sql 오류");
            }
            return "OK";
        }

        return "Fail";
    }

}
