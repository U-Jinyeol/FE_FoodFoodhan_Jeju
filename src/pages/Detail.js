import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../components/Comments";
import Nav from "../components/Nav";
import { detailCardAX } from "../redux/modules/card";
import {
  FaRegCommentDots,
  FaTags,
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
  FaPencilAlt,
} from "react-icons/fa";
import { Text, Grid, Like } from "../elements";
import { getCommentAX } from "../redux/modules/comment";
import { editLikeAX } from "../redux/modules/card";
import { history } from "../redux/configStore";

const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const card = useSelector((state) => state.card.cards);
  const openApiId = params.openApiId;
  const is_login = useSelector((state) => state.user.is_login);
  console.log(card);

  useEffect(() => {
    dispatch(detailCardAX(openApiId));
    return () => {
      console.log("cleanUp 함수");
    };
  }, []);

  const toggleLike = (openApiId) => {
    if (is_login) {
      dispatch(editLikeAX(openApiId));
    } else {
      window.alert("로그인 후 좋아요를 눌러주세요!");
      history.push("/login");
    }
  };

  if (card.length == 0) {
    console.log("되라 제발");
    return <></>;
  }

  return (
    <>
      <Grid is_flex2 margin="40px auto 0 auto">
        <CardBox>
          <h1>{card[0].openApi.storeName}</h1>
          <Img src={card[0].openApi.image} />
          <LikeBox>
            <FaRegCommentDots size={20}></FaRegCommentDots>
            <h5>{card[0].commentCnt}</h5>
            <Like
              heart={card[0].heartState}
              onClick={() => {
                toggleLike(card[0].openApi.openApiId);
              }}
            />
            <h5>{card[0].hearts}</h5>
          </LikeBox>
          <p margin="5px">
            <FaTags /> {card[0].openApi.regionName}
          </p>
          <p margin="5px">
            <FaMapMarkerAlt /> {card[0].openApi.address}
          </p>
          <p margin="5px">
            <FaPhoneSquareAlt /> {card[0].openApi.phone}
          </p>
          <p margin="5px">
            <FaPencilAlt /> {card[0].openApi.intro}
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
  width: 599px;
  height: 400px;
  object-fit: cover;
  margin-right: auto;
  margin-left: auto;
`;

const CardBox = styled.div`
  border: 0.5px solid #54a48f;
  max-width: 600px;
  width: 100%;
  height: 800px;
  border-radius: 5px;
  margin: 20px 20px;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;

  h1 {
    text-align: center;
    color: #007356;
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
  height: 800px;
  border-radius: 5px;
  padding: 0 10px;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
`;

const LikeBox = styled.div`
  display: flex;
  margin: 10px;
`;

export default Detail;
