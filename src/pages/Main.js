import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import styled from "styled-components";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { addCardAX } from "../redux/modules/card";
import { loadCardAX } from "../redux/modules/card";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import Like from "../elements/Like";

const Main = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cards);
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(card.store.storeId);
  console.log(card);

  useEffect(() => {
    dispatch(loadCardAX());
  }, []);

  const likeColor = () => {
    setLike(!like);
  };

  return (
    <>
      <Grid is_flex2 margin="30px auto 30px auto">
        {card.map((card, idx) => {
          return (
            <CardBox key={idx}>
              <p>{card.store.storeName}</p>
              <p
                onClick={() => {
                  history.push(`/detail/${card.store.storeId}`);
                }}
              >
                상세보기
              </p>
              <Img src={card.store.image} />

              <Grid is_flex3>
                <FaRegCommentDots size={20}></FaRegCommentDots>
                <Text margin="5px">{card.store.commentCnt}</Text>
                <Like like={like} onClick={likeColor}></Like>
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
  max-width: 320px;
  width: 100%;
  border-radius: 5px;
  display: inline-block;
  margin: 20px 20px;
`;

const Img = styled.img`
  background-size: cover;
  width: 320px;
  height: 250px;
  object-fit: cover;
`;

export default Main;
