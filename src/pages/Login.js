import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Button, Grid, Input, Text } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as logIn } from "../redux/modules/user";

const Login = ({ history }) => {
  const isLogin = useSelector((store) => store.user.is_login);
  const dispatch = useDispatch();

  //ID = username
  const [username, setUserName] = useState("");
  const [password, setPwd] = useState("");

  useEffect(() => {
    if (isLogin) history.push("/");
  });

  const login = (e) => {
    e.preventDefault();
    dispatch(logIn.loginDB(username, password)); // 리덕스 로그인 db 연결
  };

  // const kakao_login = () =>{

  //     dispatch();
  //     history.replace("/main");
  // }

  return (
    <React.Fragment>
      <Paddinggrid2>
        <hr width="400px" color="#f49a28"></hr>
        <LoginImage src="https://ifh.cc/g/zYd0oV.jpg" />
        <hr width="400px" color="#f49a28"></hr>
      </Paddinggrid2>

      <Paddinggrid>
        <form onSubmit={login}>
          <Grid padding={16}>
            <Input
              label="아이디"
              _onChange={(e) => setUserName(e.target.value)}
              placeholder="아이디를 입력해주세요."
            />

            <Input
              label="비밀번호"
              _onChange={(e) => setPwd(e.target.value)}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </Grid>
          <Loginbutton>
            <Button
              color="white"
              bgcolor="#f49a28"
              type="submit"
              text="로그인"
            />
            {/* <Button _onClick={kakao_login} type="submit" text= "카카오톡으로 로그인"/> */}
            <Button
              color="white"
              bgcolor="#007356"
              _onClick={() => history.push("/signup")}
              text="회원가입"
            />
          </Loginbutton>
        </form>
      </Paddinggrid>
    </React.Fragment>
  );
};

const LoginImage = styled.img`
  max-width: 200px;
  width: 100%;
  display: flex;
  margin: auto;
  padding: 20px 0px 20px 0px;
`;
const Loginbutton = styled.div`
  margin: auto;
  width: 220px;
  padding: 20px;
`;

const Paddinggrid = styled.div`
  padding-top: 10px;
`;

const Paddinggrid2 = styled.div`
  padding-top: 40px;
`;

export default Login;
