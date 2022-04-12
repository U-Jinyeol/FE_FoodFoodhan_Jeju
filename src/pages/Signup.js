import React, {useState} from "react";
import styled from "styled-components";
import { Input,Button, Text, Grid } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as signupAction } from "../redux/modules/user";


const Signup = ({history}) => {
  const isLogin = useSelector((store)=> store.user.is_login);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  // const [nickname, setNickname] = useState(""); 
  const [password, setPwd] = useState("");
  const [pwdCheck,setPwdCheck] = useState("");


  const signup=()=>{
    // if (userName === nickname){
    //   window.alert("아이디와 닉네임이 중복됩니다.");
    //   return;
    // }

    if(userName === "" || password === ""  || pwdCheck === "") { // || nickname === ""
      window.alert("모두 입력해주세요!"); 
      return;
    }

    if (password !== pwdCheck) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
      return;
    }
    dispatch(
      signupAction.signupDB(userName, password) //nickname,
    );
  }


  return (
    <React.Fragment>
    <Grid padding={16}>
        <Text type="heading">회원가입 페이지</Text>
    </Grid>

    <form
        onSubmit = {(e) => {
          e.preventDefault();
        }}>
      <Grid padding={16}>
            <Input
            label = "아이디"
            _onChange = {(e) =>setUserName(e.target.value)}
            placeholder="아이디를 입력해주세요."
            value = {userName}/>

            {/* <Input
            _onChange = {(e) =>setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요."/> */}
            
            <Input
            label = "비밀번호"
            _onChange = {(e) =>setPwd(e.target.value)}
            type="Password"
            placeholder="비밀번호를 입력해주세요."
            value = {password}/>

            <Input
            label = "비밀번호 확인"
            _onChange = {(e) =>setPwdCheck(e.target.value)}
            type="Password"
            placeholder="비밀번호를 다시 한번 입력해주세요."/>

        </Grid>

        <Button _onClick={signup} type="submit" text= "가입완료"/>
        <Button _onClick={() => history.push("/main")}  text= "취소"/>
    </form>
</React.Fragment>
  )};

export default Signup;
