import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  background-color: #ffffff; /* 배경색을 흰색으로 설정 */
  z-index: 2; /* 겹치는 이미지를 위로 올리기 위해 z-index 설정 */
  border: 5px solid #ffffff;
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

export const Picture2 = () => {
    const [imageURL, setImageURL] = useState('');
  
    useEffect(() => {
      // 서버에서 사진 데이터를 받아온다고 가정
      const imageFromServer = 'your_image_url_from_server.jpg';
      setImageURL(imageFromServer);
    }, []);
  
    return (
      <div style={{ position: 'relative' }}>
        {/* 이미지를 원형으로 보여주는 컨테이너 */}
        <ImageContainer2>
          <CircularImage src={imageURL} alt="밀집도." />
        </ImageContainer2>
      </div>
    );
  };

export default Picture;