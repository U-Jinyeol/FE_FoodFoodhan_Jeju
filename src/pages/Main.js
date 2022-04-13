import React, { useEffect, useState } from "react";
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

import { LikeAX, loadCardAX } from "../redux/modules/card";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import Like from "../elements/Like";

const Main = () => {
  const dispatch = useDispatch();
  const [is_like, setIs_like] = useState(true);
  const card = useSelector((state) => state.card.cards);

  console.log(card);

  useEffect(() => {
    dispatch(loadCardAX());
  }, []);

  const toggleLike = () => setIs_like((is_like) => !is_like);

  // const likeColor = (idx, store_id) => {
  //   dispatch(LikeAX(store_id));
  // };

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
            <>
              <CardBox key={idx}>
                <HeadBox>
                  <HeadText>{card.storeName}</HeadText>
                  <p
                    onClick={() => {
                      history.push(`/detail/${card.openApiId}`);
                    }}
                  >
                    상세보기
                  </p>
                </HeadBox>
                <Img src={card.image} />

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
                  <Text margin="5px">123</Text>

                  <Like
                    heart={true}
                    onClick={() => {
                      toggleLike();
                    }}
                  />
                  <Text margin="5px">451</Text>
                </Grid>
                <TextBox>
                  <span>
                    <FaTags style={{ margin: "10px 0 0 0" }} />
                    <h3>{card.regionName}</h3>
                  </span>
                  <br />
                  <FaPencilAlt style={{ margin: "25px 0 0 0" }} />
                  <h4>{card.intro}</h4>
                </TextBox>
              </CardBox>
              <DetailBtn
                onClick={() => {
                  history.push(`/detail/${card.openApiId}`);
                }}
              >
                <BiPlusMedical />
              </DetailBtn>
            </>
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
  color: #017356;
`;

const CardBox = styled.div`
  border: 0.5px solid #d7d8d9;
  max-width: 330px;
  width: 100%;
  height: 480px;
  border-radius: 5px;
  display: inline-block;
  margin: 20px 20px;
  padding-bottom: 20px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
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

const DetailBtn = styled.button`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background-color: #f49a28;
`;

export default Main;
