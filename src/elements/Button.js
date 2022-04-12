import React from "react";
import styled from "styled-components";

const Button = (props) => {

    const {text, _onClick,type} = props;

    return (
      <React.Fragment>
        <ElButton onClick={_onClick} type={type}>{text}</ElButton>
      </React.Fragment>
    );
}

Button.defaultProps = {
    type: "text",
    text: "텍스트",
    _onClick: () => {}
}

const ElButton = styled.button`
    width: 100%;
    background-color: #212121;
    color: #ffffff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
`;

export default Button;