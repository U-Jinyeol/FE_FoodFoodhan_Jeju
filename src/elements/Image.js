import styled from 'styled-components';
import React from 'react';

const Image = (props) => {
    const { shape, src, width, height} = props;

    const styles = {
        shape: shape,
        src: src,
        width: width,
        height: height,
    }

    if(shape === "main"){
        return (
            <ImageMain {...styles}></ImageMain> 
        ) 
    }

    if(shape === "detail"){
        return(
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }


    return(
        <React.Fragment>
                <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "main",
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjZfMjA4%2FMDAxNjM3ODkyMzQ2ODUy.lteYbpqcHEednJdbIc1EKid3NOUTrzB8UwNu4-4YhZMg.smqlgMjJkACQ3-KAfbySQ97RRQQhWlTxNTDCiMriu1og.JPEG.hyo_vly%2FKakaoTalk_20211126_100337468_16.jpg&type=sc960_832",
    width: 300,
    height: 200,
};
const ImageDefault = styled.div`
    width: ${(props) => props.width}px;
    height: ${(props) => props.size}px;
    
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;
const AspectInner = styled.div`
    position: relative; // 싱대적으로 포지션을 줌
    padding-top: 65%;
    overflow: hidden; // 영역보다 흘러넘치는 애들 숨김.
    background-image: url("${(props) => props.src}");
    background-size: cover;

`;
const ImageMain = styled.div`
    width: ${(props) => props.width}px;
    height: ${(props) => props.size}px;

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 15px;
`;

export default Image;