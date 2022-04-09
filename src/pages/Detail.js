import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../elements/Grid";
import Comments from "../components/Comments";

const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const card = useSelector((state) => state.card.cards);
  const card_index = params.card_index;
  console.log(card_index);
  console.log(card);
  console.log(card[card_index].store.storeName);

  return (
    <>
      <Grid is_flex1>
        <Img src={card[card_index].store.image} />
        <Grid>
          <p>이름 : {card[card_index].store.storeName}</p>
          <p>지역 : {card[card_index].store.regionName}</p>
          <p>주소 : {card[card_index].store.address}</p>
          <p>번호 : {card[card_index].store.phone}</p>
          <br />
          <Grid>
            <Comments></Comments>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const Img = styled.img`
  background-size: cover;
  width: 700px;
  height: 400px;
  object-fit: cover;
  margin: 30px auto 0 30px;
`;

export default Detail;
