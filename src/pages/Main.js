import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import styled from "styled-components";
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
      <Grid is_flex2 margin="30px auto 30px auto">
        {card.map((card, idx) => {
          return (
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

              <Grid is_flex3 padding="0 10px" margin="0 0 15px 0">
                <FaRegCommentDots
                  style={{ cursor: "pointer" }}
                  size={20}
                ></FaRegCommentDots>
                <Text margin="5px">123</Text>

                <Like
                  heart={is_like}
                  onClick={() => {
                    toggleLike();
                  }}
                />
                <Text margin="5px">451</Text>
              </Grid>
              <TextBox>
                <span>
                  <FaTags />
                  <h3>{card.regionName}</h3>
                </span>
                <br />
                <FaPencilAlt style={{ margin: "5px 0 0 0" }} />
                <h4>{card.intro}</h4>
              </TextBox>
            </CardBox>
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

const HeadText = styled.h1`
  color: #017356;
`;

const CardBox = styled.div`
  border: 0.5px solid #d7d8d9;
  max-width: 320px;
  width: 100%;
  border-radius: 5px;
  display: inline-block;
  margin: 20px 20px;
  padding-bottom: 20px;
`;

const Img = styled.img`
  background-size: cover;
  width: 320px;
  height: 250px;
  object-fit: cover;
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
