import styled from "styled-components";

const Making= ()=>{

return(
    <>
    <Paddinggrid>
    <hr width="400px" color="#f49a28" ></hr>
    <MakingImage src="https://ifh.cc/g/wlcZtY.jpg"/>
    <hr width="400px" color="#f49a28" ></hr>
    </Paddinggrid>

    <Github>
    <h2>React (FrontEnd) github </h2>
    <Makingbtn as="a" href="https://github.com/U-Jinyeol/FE_FoodFoodhan_Jeju">바로가기</Makingbtn>
    <h2>Spring (BackEnd) github </h2>
    <Makingbtn as="a" href="https://github.com/whyyougd/miniProject_BE">바로가기</Makingbtn>
    
    <Paddinggrid>
    <h4>항해 6기 Mini Project<br/>
        2022.04.08 ~ 2022.04.14
    </h4>
    </Paddinggrid>
    </Github>
    </>
);
};
const MakingImage = styled.img`
  max-width: 450px;
  width: 100%;
  display: flex;
  margin: auto;
  padding: 20px 0px 20px 0px;
`;
const Paddinggrid = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;
const Github = styled.div`
color : #007356;
text-align: center ;
margin: auto;
`
const Makingbtn = styled.button`
width: 100px;
height: 50px;
background-color: #f49a28;
color: white;
padding:8px;
border-radius: 7px;
`;
export default Making;