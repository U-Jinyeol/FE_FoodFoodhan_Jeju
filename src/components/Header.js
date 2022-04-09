import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import logo from "../logo.jpg";
import Grid from "../elements/Grid";

const Header = () => {
  return (
    <>
<<<<<<< Updated upstream
      <Login>
        <Text bold margin="10px 10px">
          로그인
        </Text>
        <Text bold margin="10px 10px">
          회원가입
        </Text>
      </Login>
      <Grid is_flex1>
        <HeadImage src={logo} />
      </Grid>
=======
      <Grid is_flex>
        <HeadImage src={logo} />
        <Text bold>로그인</Text>
        <Text bold>회원가입</Text>
      </Grid>
      <Grid is_flex></Grid>
>>>>>>> Stashed changes
    </>
  );
};

const HeadImage = styled.img`
  max-width: 500px;
  width: 100%;
<<<<<<< Updated upstream
  margin: 0 auto 50px auto;
`;

const Login = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 5px;
=======
  margin: 20px auto 20px auto;
>>>>>>> Stashed changes
`;

export default Header;
