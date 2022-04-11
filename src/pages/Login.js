import React, {useState} from "react";
import styled from"styled-components"

import { Button, Grid, Input, Text } from "../elements";

import { useDispatch } from "react-redux";
import {actionCreators as logIn} from "../redux/modules/user";

const Login = ({history}) => {
   
    const dispatch = useDispatch();
   
    //ID = username
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");

    const login = () =>{
        if ( userName === "" || pwd === "" ){
            window.alert("아이디 혹은 비밀번호가 공란입니다.")
            return;
        }
        dispatch(logIn.logInDB(userName,pwd)); // 리덕스 로그인 db 연결
        history.replace("/main"); //메인포트로 할지 슬래시로할지!
    }

    const kakao_login = () =>{
        
        dispatch();
        history.replace("/main"); //메인포트로 할지 슬래시로할지!
    }




    return (
        <React.Fragment>
            <Grid padding={16}>
                <Text type="heading">로그인 페이지</Text>
            </Grid>
            <Grid padding={16}>
                
                <Input
                _onChange = {(e) =>setUserName(e.target.value)}
                placeholder="아이디를 입력하세요."/>
                
                <Input
                _onChange = {(e) =>setPwd(e.target.value)}
                type="password"
                placeholder="비밀번호를 입력하세요."/>

            </Grid>

            <Button _onClick={login} type="submit" text= "로그인"/>
            <Button _onClick={kakao_login} type="submit" text= "카카오톡으로 로그인"/>
            <Button _onClick={() => history.push("/signup")}  text= "회원가입으로 이동"/>
        
        </React.Fragment>
    )
}
// value={id} onChange={changeId}
// value={pwd} onChange={changePwd}
export default Login;