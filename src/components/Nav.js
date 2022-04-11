import React, { useState } from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import { regionCardAX } from "../redux/modules/card";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

const Nav = () => {
  const [region, setRegion] = useState([
    "all",
    "hanlim",
    "jeju",
    "seongsan",
    "hyeopjae",
  ]);
  const dispatch = useDispatch();
  return (
    <>
      <Grid is_flex2>
        {region.map((region, idx) => {
          return (
            <Tag
              key={idx}
              onClick={() => {
                history.push(`/${region}`);
                dispatch(regionCardAX(region));
              }}
              size="20"
              color="white"
            >
              {region}
            </Tag>
          );
        })}
      </Grid>
    </>
  );
};

const Tag = styled.h3`
  border: 0.5px solid #007356;
  border-radius: 20px;
  box-sizing: border-box;
  width: 140px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #333333;
  margin: 20px 10px 0px 10px;
`;

const Hr = styled.hr`
  border: 1px solid #007356;
`;

export default Nav;
