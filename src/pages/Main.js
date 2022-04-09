import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import styled from "styled-components";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <Grid is_flex1 margin="40px 40px">
        <CardBox>
          <p>제주도 할망 라면</p>
          <Img src="https://img.insight.co.kr/static/2020/09/26/700/img_20200926141402_cd1rk7ql.jpg" />

          <Grid is_flex3>
            <FaRegCommentDots size={20}></FaRegCommentDots>
            <Text margin="5px">10</Text>
            <FaRegHeart size={20}></FaRegHeart>
            <Text margin="5px">20</Text>
          </Grid>
          <p>성산</p>
          <p>
            해녀분이 직접 잡아 당일 재료로 끓여주시는 자연 오션뷰 라면집
            해녀분이 직접 잡아 당일 재료로 끓여주시는 자연 오션뷰 라면집
            해녀분이 직접 잡아 당일 재료로 끓여주시는 자연 오션뷰 라면집
          </p>
          <p>자세한 정보는 카드 클릭!</p>
        </CardBox>

        <CardBox>
          <p>제주도 흑돼지</p>
          <Img src="https://static.hubzum.zumst.com/hubzum/2018/03/02/13/f0e963a82e974cc5a4fea79ea94928fd.jpg" />

          <Grid is_flex3>
            <FaRegCommentDots size={20}></FaRegCommentDots>
            <Text margin="5px">10</Text>
            <FaRegHeart size={20}></FaRegHeart>
            <Text margin="5px">20</Text>
          </Grid>
          <p>애월</p>
          <p>
            제주도 하면 바로 흑돼지!! 식감과 맛이 일품! 제주도 하면 바로
            흑돼지!! 식감과 맛이 일품! 제주도 하면 바로 흑돼지!! 식감과 맛이
            일품!
          </p>
          <p>자세한 정보는 카드 클릭!</p>
        </CardBox>
      </Grid>
    </>
  );
};

const CardBox = styled.div`
  border: 0.5px solid gray;
  max-width: 400px;
  width: 100%;
`;

const Img = styled.img`
  background-size: cover;
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

export default Main;
