import React, {useState} from "react";
import styled from "styled-components";
import { Input,Button, Text, Grid } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as signupAction } from "../redux/modules/user";


const Signup = ({history}) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [nickname, setNickname] = useState(""); 
  const [pwd, setPwd] = useState("");
  const [pwdCheck,setPwdCheck] = useState("");

  const signup=()=>{
    if (userName === nickname){
      window.alert("아이디와 닉네임이 중복됩니다.");
      return;
    }

    if (userName === "" || pwd=== "" || nickname === ""){
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!")
      return;
    }
    
    if (pwd !== pwdCheck) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!")
      return;
    }
    dispatch(
      signupAction.signupDB(userName, pwd, nickname, pwdCheck)
    );
  }


  return (
    <React.Fragment>
    <Grid padding={16}>
        <Text type="heading">회원가입 페이지</Text>
    </Grid>
    <Grid padding={16}>
        
        <Input
        _onChange = {(e) =>setUserName(e.target.value)}
        placeholder="아이디를 입력하세요."/>

        <Input
        _onChange = {(e) =>setNickname(e.target.value)}
        placeholder="닉네임을 입력하세요."/>
        
        <Input
        _onChange = {(e) =>setPwd(e.target.value)}
        type="password"
        placeholder="비밀번호를 입력하세요."/>

        <Input
        _onChange = {(e) =>setPwdCheck(e.target.value)}
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."/>

    </Grid>

    <Button _onClick={signup} type="submit" text= "가입완료"/>
    <Button _onClick={() => history.push("/login")}  text= "로그인으로 이동"/>

</React.Fragment>
  )};

export default Signup;
