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
    <button>바로가기</button>
    <h2>Spring (BackEnd) github </h2>
    <button>바로가기</button>
 
    <h4>항해 6기 Mini Project<br/>
        2022.04.08 ~ 2022.04.14
    </h4>

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
export default Making;