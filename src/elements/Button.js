import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, type, width, margin, bordercolor, bgcolor, color} = props;

  return (
    <React.Fragment>
      <ElButton bordercolor={bordercolor} color={color} bgcolor={bgcolor} margin = {margin} width = {width} onClick={_onClick} type={type}>
        {text}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  bordercolor:"text",
  type: "text",
  text: "텍스트",
  _onClick: () => {},
  width: 100,
  margin: 5,
  bgcolor: "text",
  color:"text",
};

const ElButton = styled.button`
  border-color: ${(props) => props.bordercolor};
  border-radius: 7px;
  width: 100%;
  background-color: ${(props) => props.bgcolor};
  transition: ${(props) => props.transition}s;
  color:  ${(props) => props.color};
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  width: ${(props) => props.width}px;
  margin: ${(props) => props.margin}px;
`;

export default Button;
