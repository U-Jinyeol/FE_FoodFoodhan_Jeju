import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../components/Comments";
import { detailCardAX } from "../redux/modules/card";
import {
  FaRegCommentDots,
  FaTags,
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { Text, Grid, Like } from "../elements";
import { getCommentAX } from "../redux/modules/comment";

const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const card = useSelector((state) => state.card.cards);
  const openApiId = params.openApiId;
  console.log(card);

  useEffect(() => {
    dispatch(detailCardAX(openApiId));
  }, []);

  return (
    <>
      <Grid is_flex2 margin="40px auto 0 auto">
        <CardBox>
          <h1>{card[0].storeName}</h1>
          <Img src={card[0].image} />
          <LikeBox>
            <FaRegCommentDots size={20}></FaRegCommentDots>
            <h5>4544</h5>
            <Like />
            <h5>151</h5>
          </LikeBox>
          <p margin="5px">
            <FaTags /> {card[0].regionName}
          </p>
          <p margin="5px">
            <FaMapMarkerAlt /> {card[0].address}
          </p>
          <p margin="5px">
            <FaPhoneSquareAlt /> {card[0].phone}
          </p>
        </CardBox>
        <CommentBox>
          <Comments></Comments>
        </CommentBox>
      </Grid>
    </>
  );
};

const Img = styled.img`
  background-size: cover;
  width: 600px;
  height: 400px;
  object-fit: cover;
`;

const CardBox = styled.div`
  border: 0.5px solid #d7d8d9;
  max-width: 600px;
  width: 100%;
  height: 700px;
  border-radius: 5px;
  margin: 20px 20px;
  box-sizing: border-box;
  h1 {
    text-align: center;
  }
  h5 {
    font-size: 20px;
    margin: 0 7px;
  }
  p {
    font-size: 20px;
    margin: 30px 10px;
  }
`;

const CommentBox = styled.div`
  border: 0.5px solid #d7d8d9;
  max-width: 600px;
  width: 100%;
  height: 700px;
  border-radius: 5px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const LikeBox = styled.div`
  display: flex;
  margin: 10px;
`;

export default Detail;
