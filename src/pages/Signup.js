import React, {useState} from "react";
import styled from "styled-components";
import { Input,Button, Text, Grid } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as signupAction } from "../redux/modules/user";
import signupimg from "../signupimg.jpg";


const Signup = ({history}) => {
  const isLogin = useSelector((store)=> store.user.is_login);
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  // const [nickname, setNickname] = useState(""); 
  const [password, setPwd] = useState("");
  const [pwdCheck,setPwdCheck] = useState("");


  const signup=()=>{
    // if (username === nickname){
    //   window.alert("아이디와 닉네임이 중복됩니다.");
    //   return;
    // }

    if(username === "" || password === ""  || pwdCheck === "") { // || nickname === ""
      window.alert("모두 입력해주세요!"); 
      return;
    }

    if (password !== pwdCheck) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
      return;
    }
    dispatch(
      signupAction.signupDB(username, password) //nickname,
    );
  }


  return (
    <React.Fragment>
      <Paddinggrid2> 
        <hr width="400px" color="#f49a28" ></hr>
          <SignupImage src={signupimg} />
        <hr width="400px" color="#f49a28"></hr>
        </Paddinggrid2>
  
    <form
        onSubmit = {(e) => {
          e.preventDefault();
        }}>
      <Grid padding={16}>
            <Paddinggrid>
            <Input
            label = "아이디"
            _onChange = {(e) =>setUserName(e.target.value)}
            placeholder="아이디를 입력해주세요."
            value = {username}/>

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
        </Paddinggrid>
        </Grid>
          <Signupbutton>
        <Button 
        _onClick={signup} type="submit" text= "가입완료"
        bgcolor = "#f49a28" color="white"/>
        <Button _onClick={() => history.push("/main")}  text= "취소"
        bgcolor = "#f49a28" color = "white"/>
          </Signupbutton>
    </form>
</React.Fragment>
  )};

const SignupImage = styled.img`
  max-width: 250px;
  width: 100%;
  display: flex;
  margin: auto;
  padding: 20px 0px 20px 0px;
`;
const Signupbutton = styled.div`
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




export default Signup;
