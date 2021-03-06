import React, { useState } from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import { regionCardAX } from "../redux/modules/card";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

const Nav = () => {
  const [region, setRegion] = useState([
    "전체보기",
    "제주시내",
    "한림",
    "한경",
    "조천",
    "구좌",
    "우도",
    "추차도",
    "성산",
    "서귀포시내",
    "대정",
    "안덕",
    "중문",
    "남원",
    "표선",
  ]);
  const dispatch = useDispatch();
  return (
    <>
      <Grid is_flex2 width="1300px" margin="0 auto">
        {region.map((region, idx) => {
          return (
            <React.Fragment key={idx}>
              <Tag
                onClick={() => {
                  // history.push(`/${region}`);
                  dispatch(regionCardAX(region));
                }}
                size="20"
                color="white"
              >
                # {region}
              </Tag>
            </React.Fragment>
          );
        })}
      </Grid>
    </>
  );
};

const Tag = styled.h3`
  border: 2px solid #007356;
  border-radius: 20px;
  box-sizing: border-box;
  width: 140px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #333333;
  margin: 20px 10px 0px 10px;
  cursor: pointer;
  :hover {
    background-color: #f49a28;
    color: white;
    border: 1px solid white;
    box-shadow: 0 0 3px black;
  }
`;

export default Nav;
