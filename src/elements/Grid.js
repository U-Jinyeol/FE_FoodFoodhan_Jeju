import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    height,
    is_flex1,
    is_flex2,
    is_flex3,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    flex_wrap,
  } = props;

  const styles = {
    is_flex1: is_flex1,
    is_flex2: is_flex2,
    is_flex3: is_flex3,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    height: height,
    flex_wrap: flex_wrap,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex1: false,
  is_flex2: false,
  is_flex3: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  height: "100%",
  flex_wrap: "wrap",
};

const GridBox = styled.div`
  flex-wrap: ${(props) => props.flex_wrap};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex1
      ? `display: flex; align-items: center; justify-content: space-around `
      : ""}
      ${(props) => (props.center ? `text-align: center;` : "")}

  ${(props) =>
    props.is_flex2
      ? `display: flex; align-items: center; justify-content: center `
      : ""}
      ${(props) => (props.center ? `text-align: center;` : "")}

      ${(props) =>
    props.is_flex3
      ? `display: flex; align-items: center; justify-content: left `
      : ""}
      ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default Grid;
