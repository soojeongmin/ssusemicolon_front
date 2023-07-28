import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Icon from '../component/Icon';
import { SearchContainer } from './SearchContainer';

const StyledIcon = styled.div`
  svg {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 0 3px #000;
  z-index: 20;
`;

const HeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const HeaderStart = styled.h1`
  height: 40px;
  line-height: 40px;
`;

const HeaderHamburger = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2.0rem;
`;

const HeaderTitle = styled.span`
  font-size: 1.2rem;
  padding: 0 6px;
`;

const HeaderCenter = styled.div`
  width: 50%;
`;

const HeaderInputButton = styled.button`
  width: 60px;
  height: 40px;
  padding: 0 6px;
`;

const MenuInputButton = styled.button`
  width: 140px;
  height: 20px;
  padding: 0 6px;
  margin-top: 20px;
  text-align: left;
  margin-left: 30px;
`;

const HeaderEnd = styled.div`
  display: flex;
`;

const HeaderSearch = styled.button`
  display: none;
  margin-right: 5px;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
`;

const HeaderProfile = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 50%;
  background-color: tomato;
  background-image: none;
`;

const Menu = styled.div`
  position: absolute;
  top: 80px;
  left: ${(props) => (props.isOpen ? '0' : '-200px')};
  width: 31%;
  height: 100vh;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  animation: ${(props) => (props.isOpen ? slideInAnimation : 'none')} 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
`;

const MenuButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MenuButtonWrapper = styled.div`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const slideInAnimation2 = keyframes`
  from {
    transform: translateY(-60%);
  }
  to {
    transform: translateY(0);
  }
`;
const SubMenu = styled.div`
  padding: 10px;
  background-color: #ffffff;
  margin-top: 10px;
  animation: ${slideInAnimation2} 0.3s ease-in-out;
`;
const Subbutton = styled.button`
display:flex;
flex-direction:column;
width: 140px;
height: 20px;
padding: 0 px;
margin-top: 20px;
text-align: left;
margin-left: 50px;
color:gray;
`;

const MenuButton = ({ children }) => {
  return (
    <MenuButtonContainer>
      {React.Children.map(children, (child, index) => (
        <MenuButtonWrapper key={index}>{child}</MenuButtonWrapper>
      ))}
    </MenuButtonContainer>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [stores, setStores] = useState([]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  }
  const handleSettingsClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    toggleSubMenu();
  };
  const handleSearch = () => {
    axios
      .get(`/store/search?query=${searchKeyword}`)
      .then((response) => {
        setStores(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching store data:', error);
      });
  };

  useEffect(() => {
    // stores 상태가 변경될 때마다 해당 매장 정보를 지도에 마커로 표시하는 로직
    // (지도 관련 로직은 상단에 있는 MapContainer 컴포넌트에서 작성되어 있다고 가정)
    // 예시: 지도 관련 로직은 MapContainer에서 작성
    // displayMarkersOnMap(stores);
    // (displayMarkersOnMap 함수는 MapContainer에서 정의하여 지도에 마커를 표시하는 역할을 수행)
  }, [stores]);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <StyledIcon>
          <HeaderHamburger onClick={toggleMenu}><Icon.Menu /></HeaderHamburger>
          <HeaderTitle>로고</HeaderTitle>
        </StyledIcon>
        <HeaderCenter>
          {isSearchOpen && (
           <SearchContainer/>
          )}
        </HeaderCenter>
        <HeaderEnd>
        <HeaderSearch></HeaderSearch>
          <StyledIcon>
          <HeaderInputButton onClick={toggleSearch}>
            <Icon.Search/>
            </HeaderInputButton>
          <HeaderInputButton onClick><Icon.Dark/></HeaderInputButton>
          <HeaderInputButton onClick><Icon.Option/></HeaderInputButton>
          </StyledIcon>
        </HeaderEnd>
      </HeaderWrapper>
      <div className="menu-container">
      {isMenuOpen && (
          <Menu isOpen={isMenuOpen} onClick={toggleMenu}>
            <MenuButton>
              <MenuInputButton>공지 사항</MenuInputButton>
              <MenuInputButton>신규 장소 등록</MenuInputButton>
              <MenuInputButton>고객 센터</MenuInputButton>

              <MenuInputButton onClick={handleSettingsClick}>설정</MenuInputButton>
              {isSubMenuOpen && (
                <SubMenu>
                  <Subbutton>장소 수정</Subbutton>
                  <Subbutton>매장 삭제 신청</Subbutton>
                  <Subbutton>검색 기록 삭제</Subbutton>
                  </SubMenu>
              )}
              <MenuInputButton>버전 정보 v0.0.0</MenuInputButton>
            </MenuButton>
          </Menu>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;