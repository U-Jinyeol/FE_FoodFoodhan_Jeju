import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Grid from "../elements/Grid";

const Nav = () => {
  return (
    <>
      <Navbar>
        <Grid is_flex1>
          <Text size="20" color="white">
            전체보기
          </Text>
          <Text size="20" color="white">
            성산
          </Text>
          <Text size="20" color="white">
            한림
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
            제주시
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
  background-color: #80b2a5;
  height: 40px;
  line-height: 40px;
  padding: 0 5px;
`;

export default Nav;
