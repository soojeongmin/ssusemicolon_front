import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Icon from "../component/Icon"
import { useDetailBoard } from "../utils/hooks/useDetailboard";
import { useParams } from 'react-router-dom';

const ImageContainer = styled.div`
  position: absolute;
  top: -125px;
  left: 30%;
  width: 250px; /* 판보다 약간 작은 크기로 설정 */
  height: 250px; /* 판보다 약간 작은 크기로 설정 */
  border-radius: 50%;
  overflow: hidden;
  background-color: transparent; /* 배경색을 흰색으로 설정 */
  z-index: 2; /* 겹치는 이미지를 위로 올리기 위해 z-index 설정 */
  border: 5px solid #ff0000;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const ImageContainer2 = styled.div`
  position: absolute;
  top: 30px;
  left: 42%;
  width: 90px; /* 판보다 약간 작은 크기로 설정 */
  height: 90px; /* 판보다 약간 작은 크기로 설정 */
  border-radius: 50%;
  overflow: hidden;
  z-index: 2; /* 겹치는 이미지를 위로 올리기 위해 z-index 설정 */
  border: 5px solid #ffffff;
  display:flex;
  align-items:center;
  justify-content:center;
  ${({ density=0 }) =>
    density >= 70
      ? css`
          background-color: #ff0000; /* 혼잡일 때 빨강 */
        `
      : density >= 40
      ? css`
          background-color: #ffff00; /* 보통일 때 노랑 */
        `
      : css`
          background-color: #00ff00; /* 원활일 때 초록 */
        `};

`;

const CircularImage = styled.img`
  width:440px; 
  height:220px;
  display: flex; 
  background-color: #e0e0e0;
  background-image: url(${props => props.thumurl});
`;
const CircularImage2 = styled.img`
  object-fit:cover;
`;

const Image = ({thumurl}) => {
  return <CircularImage thumurl={thumurl}/>
}
const Picture = ({thumurl}) => {
  return (
    <div style={{ position: 'relative' }}>
      {/* 이미지를 원형으로 보여주는 컨테이너 */}
      
      <ImageContainer>
        <Image thumurl = {thumurl}/>
      </ImageContainer>
    </div>
  );
};

export const Picture2 = ({density}) => {
    return (
      <div style={{ position: 'relative' }}>
        {/* 이미지를 원형으로 보여주는 컨테이너 */}
        <ImageContainer2 density = {density}>
          <Icon.Fire/>
        </ImageContainer2>
      </div>
    );
  };

export default Picture;