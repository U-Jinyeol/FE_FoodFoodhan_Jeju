import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import { regionCardAX } from "../redux/modules/card";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const region_list = useSelector((state) => state.card);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar>
        <Grid is_flex1>
          <Text
            _onClick={() => {
              dispatch(regionCardAX("All"));
            }}
            size="20"
            color="white"
          >
            전체보기
          </Text>
          <Text
            _onClick={() => {
              dispatch(regionCardAX("성산"));
            }}
            size="20"
            color="white"
          >
            성산
          </Text>
          <Text
            _onClick={() => {
              dispatch(regionCardAX("한림"));
            }}
            size="20"
            color="white"
          >
            한림
          </Text>
          <Text
            _onClick={() => {
              dispatch(regionCardAX("제주시"));
            }}
            size="20"
            color="white"
          >
            제주시
          </Text>
          <Text size="20" color="white">
            조천
          </Text>
          <Text size="20" color="white">
            애월
          </Text>
          <Text size="20" color="white">
            중문
          </Text>

          <Text size="20" color="white">
            구좌
          </Text>
          <Text size="20" color="white">
            남원
          </Text>
          <Text size="20" color="white">
            서귀포
          </Text>
        </Grid>
      </Navbar>
    </>
  );
};

const Navbar = styled.div`
  background-color: #f49a26;
  height: 40px;
  line-height: 40px;
  padding: 0 5px;
`;

export default Nav;
