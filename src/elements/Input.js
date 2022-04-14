import React from "react";
import styled from "styled-components";

import {Text, Grid} from "./index";

const Input = (props) => {
    const {label, placeholder, _onChange, value, type} = props;
    return (
      <React.Fragment>
        <InputGrid >
          <Text color = "#007356" margin="10px" size = "15px" bold >{label}</Text>
          <ElInput  vlue = {value} type = {type} placeholder={placeholder} onChange={_onChange} />
        </InputGrid>
      </React.Fragment>
    );
}

Input.defaultProps = {
    valuer:"",
    type: "text",
    label: '텍스트',
    placeholder: '텍스트를 입력해주세요.',
    _onChange: () => {}
}

const ElInput = styled.input`
    display: flex;
    margin-bottom: 15px;;
    border: 1.5px solid #007356;
    width: 450px;
    padding: 12px 4px;
    box-sizing: border-box;
    border-radius: 7px;
`;

const InputGrid = styled.div`
    width: 450px;
    margin: auto;
`;

export default Input;