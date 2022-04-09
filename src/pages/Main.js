import React, { useEffect } from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import styled from "styled-components";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { addCardAX } from "../redux/modules/card";
import { loadCardAX } from "../redux/modules/card";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

const Main = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);
  console.log(card);

  useEffect(() => {
    dispatch(loadCardAX());
  }, []);

  return (
    <>
      <Grid is_flex1 margin="40px 40px">
        {card.map((card, idx) => {
          return (
            <CardBox
              key={idx}
              onClick={() => {
                history.push(`/detail/${idx}`);
              }}
            >
              <p>{card.store.storeName}</p>
              <Img src={card.store.image} />

              <Grid is_flex3>
                <FaRegCommentDots size={20}></FaRegCommentDots>
                <Text margin="5px">{card.store.commentCnt}</Text>
                <FaRegHeart size={20}></FaRegHeart>
                <Text margin="5px">{card.store.like}</Text>
              </Grid>
              <p>{card.store.regionName}</p>
              <p>{card.store.desc}</p>
              <p>자세한 정보는 카드 클릭!</p>
            </CardBox>
          );
        })}
      </Grid>
    </>
  );
};

const CardBox = styled.div`
  border: 0.5px solid #d7d8d9;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
`;

const Img = styled.img`
  background-size: cover;
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

export default Main;
