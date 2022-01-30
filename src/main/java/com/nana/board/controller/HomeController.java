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

}
