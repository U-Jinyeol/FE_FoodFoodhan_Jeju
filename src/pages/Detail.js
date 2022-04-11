import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../elements/Grid";
import Comments from "../components/Comments";
import { detailCardAX } from "../redux/modules/card";

const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const card = useSelector((state) => state.card.cards);
  const store_id = params.store_id;
  console.log(store_id);
  console.log(card);
  // console.log(card.store.storeName);

  useEffect(() => {
    dispatch(detailCardAX(store_id));
  }, []);

  return (
    <>
      <Grid is_flex1>
        {/* <Img src={card.store.image} /> */}
        <Grid>
          {/* <p>이름 : {card.store.storeName}</p>
          <p>지역 : {card.store.regionName}</p>
          <p>주소 : {card.store.address}</p>
          <p>번호 : {card.store.phone}</p> */}
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
