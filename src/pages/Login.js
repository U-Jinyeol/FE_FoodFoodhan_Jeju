import React, {useState, useEffect} from "react";
import styled from"styled-components"

import { Button, Grid, Input, Text } from "../elements";

import { useDispatch,useSelector } from "react-redux";
import {actionCreators as logIn} from "../redux/modules/user";

const Login = ({history}) => {
    const isLogin = useSelector((store) => store.user.is_login);
    const dispatch = useDispatch();
   
    //ID = username
    const [username, setUserName] = useState("");
    const [password, setPwd] = useState("");

    useEffect(() => {
		if (isLogin) history.push('/main');
	});

    const login = (e) =>{
        e.preventDefault();
        dispatch(logIn.loginDB(username,password)); // 리덕스 로그인 db 연결
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
                onSubmit = {login}>
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

            <Button  type="submit" text= "로그인"/>
            {/* <Button _onClick={kakao_login} type="submit" text= "카카오톡으로 로그인"/> */}
            <Button _onClick={() => history.push("/signup")}  text= "회원가입"/>
        
            </form>
        </React.Fragment>
    )
}
export default Login;