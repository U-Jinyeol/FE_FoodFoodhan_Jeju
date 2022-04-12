import React from "react";

import styled from "styled-components";
import Heart from "../Assets/Heart.png";
import emptyHeart from "../Assets/emptyHeart.png";

const Like = ({ heart, onClick }) => {
  const heart_url = heart ? Heart : emptyHeart;
  console.log(heart);

  return <HeartI src={heart_url} onClick={onClick} />;
};

const HeartI = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :hover {
    width: 25px;
    height: 25px;
  }
`;

export default Like;
