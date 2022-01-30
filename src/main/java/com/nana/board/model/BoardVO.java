package com.nana.board.model;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BoardVO {

    private Long b_seq ;// bigint auto_increment primary key,
    private String b_title;// VARCHAR(50) NOT NULL,
    private String b_name;// VARCHAR(50) NOT NULL,
    private String b_content;// VARCHAR(50) NOT NULL,
    private String b_date;// varchar(20)

}