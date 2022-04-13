import React, {useState} from "react";
import styled from"styled-components"

import { Button, Grid, Input, Text } from "../elements";

import { useDispatch } from "react-redux";
import {actionCreators as logIn} from "../redux/modules/user";

const Login = ({history}) => {
   
    const dispatch = useDispatch();
   
    //ID = username
    const [username, setUserName] = useState("");
    const [password, setPwd] = useState("");

    const login = () =>{
        if ( username === "" || password === "" ){
            window.alert("모두 입력해주세요!")
            return;
        }
        dispatch(logIn.loginDB(username,password)); // 리덕스 로그인 db 연결
        history.replace("/main"); 
    }

    // const kakao_login = () =>{
        
    //     dispatch();
    //     history.replace("/main"); 
    // }




    return (
        <React.Fragment>
            <Grid padding={16}>
                <Text type="heading">로그인 페이지</Text>
            </Grid>

            <form
                onSubmit = {(e) => {
                e.preventDefault();
                }}>
            <Grid padding={16}>
                
                <Input
                label = "아이디"
                _onChange = {(e) =>setUserName(e.target.value)}
                placeholder="아이디를 입력해주세요."/>
                
                <Input
                 label = "비밀번호"
                _onChange = {(e) =>setPwd(e.target.value)}
                type="password"
                placeholder="비밀번호를 입력해주세요."/>

            </Grid>

            <Button _onClick={login} type="submit" text= "로그인"/>
            {/* <Button _onClick={kakao_login} type="submit" text= "카카오톡으로 로그인"/> */}
            <Button _onClick={() => history.push("/signup")}  text= "회원가입"/>
        
            </form>
        </React.Fragment>
    )
}
export default Login;