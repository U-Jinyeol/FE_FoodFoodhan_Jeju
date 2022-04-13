import React from "react";
import styled from "styled-components";
import logo from "../logo.jpg";
import {Grid, Button, Text} from "../elements";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";
import { actionCreators as logoutAction } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_token = document.cookie? true:false
    console.log(is_token);
  if (is_token){
    return(
      <>
      
        <Grid gap = "10px;">
            
            <Button
            _onClick={()=>{history.push('/main')}}
            text = "Home"
            primary
            />
            <Button
            _onClick={()=>{dispatch(logoutAction.logoutDB());}
            }
            text = "로그아웃"
            primary
            />

        </Grid>
           <Grid is_flex1>
           <HeadImage src={logo} />
         </Grid>
    
      </>
    );
  }
  return (
    <>
     {/* <Container>       */}
       <Login>
            <Button 
            _onClick={()=>{history.push('/main')}}
            text="Home"
            />
             
            <Button
            _onClick={()=>{history.push('/login')}}
            text = "로그인"
            />

            <Button
            _onClick={()=>{history.push('/signup')}}
            text = "회원가입"
            />
      </Login>
      <Grid is_flex1>
        <HeadImage src={logo} />
      </Grid>
      {/* </Container> */}
    </>
  );
};
// const Container = styled.header`
// 	padding: 0 24px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	background-color: #fff;
// 	width: 100%;
// 	height: 80px;
// 	position: fixed;
// 	left: 0;
// 	top: 0;
// `;

const HeadImage = styled.img`
  max-width: 500px;
  width: 100%;
  margin: 0 auto 50px auto;
`;

const Login = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 5px;
`;

export default Header;
