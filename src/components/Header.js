import React from "react";
import styled from "styled-components";
import logo from "../logo.jpg";
import { Grid, Button, Text } from "../elements";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as logoutAction } from "../redux/modules/user";
import { regionCardAX } from "../redux/modules/card";

const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const is_token = document.cookie ? true : false;
  console.log(is_login);

  if (is_token && is_login) {
    return (
      <>
        <LoginGrid>
          <Button
            _onClick={() => {
              history.push("/making");
            }}
            text="About us"
            width="80"
            color="white"
            bgcolor="#f49a28"
          />

          <Button
            _onClick={() => {
              history.push("/");
            }}
            text="Home"
            width="80"
            color="white"
            bgcolor="#007356"
          />
          <Button
            _onClick={() => {
              dispatch(logoutAction.logoutDB());
            }}
            text="로그아웃"
            width="80"
            color="white"
            bgcolor="#007356"
          />

          <Button
            _onClick={() => {
              dispatch(regionCardAX("전체보기"));
            }}
            text="Home"
          />
          <Button
            _onClick={() => {
              dispatch(logoutAction.logoutDB());
            }}
            text="로그아웃"
          />
        </LoginGrid>

        <Grid is_flex1>
          <HeadImage src={logo} />
        </Grid>
      </>
    );
  }

  return (
    <>
      <LoginGrid>
        <Button
          _onClick={() => {
            history.push("/making");
          }}
          text="About us"
          width="80"
          color="white"
          bgcolor="#f49a28"
        />

        <Button
          _onClick={() => {
            history.push("/");
          }}
          text="Home"
          width="80"
          color="white"
          bgcolor="#007356"
        />

        <Button
          _onClick={() => {
            history.push("/login");
          }}
          text="로그인"
          width="80"
          color="white"
          bgcolor="#007356"
        />

        <Button
          _onClick={() => {
            history.push("/signup");
          }}
          text="회원가입"
          width="80"
          color="white"
          bgcolor="#007356"
        />
      </LoginGrid>
      <Grid is_flex1>
        <HeadImage src={logo} />
      </Grid>
    </>
  );
};

const HeadImage = styled.img`
  max-width: 500px;
  width: 100%;
  margin: 0 auto 50px auto;
`;

const LoginGrid = styled.div`
  padding: 10px;
  display: flex;
  justify-content: right;
  margin-right: 5px;
`;

export default Header;
