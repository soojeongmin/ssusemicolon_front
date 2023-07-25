import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Icon from "../component/Icon"

const ImageContainer = styled.div`
  position: absolute;
  top: -125px;
  left: 30%;
  width: 250px; /* 판보다 약간 작은 크기로 설정 */
  height: 250px; /* 판보다 약간 작은 크기로 설정 */
  border-radius: 50%;
  overflow: hidden;
  background-color: #ffffff; /* 배경색을 흰색으로 설정 */
  z-index: 2; /* 겹치는 이미지를 위로 올리기 위해 z-index 설정 */
  border: 5px solid #ffffff;
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
  ${({ density }) =>
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
  position: absolute;
  top: -10px; /* Y축으로 -10px만큼 위치 조정 */
  left: -10px; /* X축으로 -10px만큼 위치 조정 */
  width: 180px; /* 판보다 약간 큰 크기로 설정 */
  height: 180px; /* 판보다 약간 큰 크기로 설정 */
  object-fit: cover;
`;

const Picture = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    // 서버에서 사진 데이터를 받아온다고 가정
    const imageFromServer = 'your_image_url_from_server.jpg';
    setImageURL(imageFromServer);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* 이미지를 원형으로 보여주는 컨테이너 */}
      <ImageContainer>
        <CircularImage src={imageURL} alt="가게 사진" />
      </ImageContainer>
    </div>
  );
};

export const Picture2 = ({density=50}) => {
    const [imageURL, setImageURL] = useState('');
  
    useEffect(() => {
      // 사진은 Fire로 고정
      const imageFromServer = (
        <Icon.Fire width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 아이콘의 내용 */}
        </Icon.Fire>
      );
      setImageURL(imageFromServer);
    }, []);
  
    return (
      <div style={{ position: 'relative' }}>
        {/* 이미지를 원형으로 보여주는 컨테이너 */}
        <ImageContainer2 density = {density}>
        <CircularImage src = {imageURL}alt=""/>
        </ImageContainer2>
      </div>
    );
  };

export default Picture;