import React, { Fragment, useEffect, useState } from "react";
import "./Main.css";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Nav from "../components/Nav";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import {
  FaRegCommentDots,
  FaTags,
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
  FaPencilAlt,
} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { loadCardAX, editLikeAX } from "../redux/modules/card";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import Like from "../elements/Like";

const Main = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);
  const is_login = useSelector((state) => state.user.is_login);
  // const [is_like, setIsLike] = React.useState(false);
  // const [like_cnt, setLikeCnt] = React.useState(0);

  console.log(card);

  useEffect(() => {
    dispatch(loadCardAX());
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

  return (
    <>
      <Nav></Nav>
      <h3 style={{ textAlign: "center", marginTop: "60px" }}>
        <span style={{ color: "#F49A28" }}>{card.length}개</span>의
        결과가있습니다
      </h3>
      <Grid is_flex2 margin="30px auto 30px auto" width="1500px">
        {card.map((card, idx) => {
          return (
            <Fragment key={idx}>
              <CardBox>
                <HeadBox>
                  <HeadText>{card.openApi.storeName}</HeadText>
                </HeadBox>
                <Img src={card.openApi.image} />

                <Grid
                  is_flex3
                  padding="0 10px"
                  margin="0 0 15px 0"
                  height="100%"
                >
                  <FaRegCommentDots
                    style={{ cursor: "pointer" }}
                    size={20}
                  ></FaRegCommentDots>
                  <Text margin="5px">{card.commentCnt}</Text>

                  <Like
                    heart={card.heartState}
                    onClick={() => {
                      toggleLike(card.openApi.openApiId);
                    }}
                  />
                  <Text margin="5px">{card.hearts}</Text>
                </Grid>
                <TextBox>
                  <span>
                    <FaTags style={{ margin: "10px 0 0 0" }} />
                    <h3>{card.openApi.regionName}</h3>
                  </span>
                  <br />
                  <FaPencilAlt style={{ margin: "25px 0 0 0" }} />
                  <h4>{card.openApi.intro}</h4>
                </TextBox>
              </CardBox>
              <button
                className="detailBtn"
                onClick={() => {
                  history.push(`/detail/${card.openApi.openApiId}`);
                }}
              >
                Detail
              </button>
            </Fragment>
          );
        })}
      </Grid>
    </>
  );
};

const HeadBox = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const HeadText = styled.h2`
  color: #f49a28;
`;

const CardBox = styled.div`
  border: 0.5px solid #d7d8d9;
  color: #0f251f;
  max-width: 330px;
  width: 100%;
  height: 480px;
  border-radius: 5px;
  display: inline-block;
  margin: 20px 20px;
  padding-bottom: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
`;

const Img = styled.img`
  background-size: cover;
  width: 330px;
  height: 250px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
`;

const TextBox = styled.div`
  padding: 0 10px;

  h3 {
    display: inline;
  }
  h4 {
    display: inline;
  }
`;

export default Main;
