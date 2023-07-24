import React, { useState,useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Icon from '../component/Icon';


const StyledIcon = styled.div`
  svg {
    width: 24px; /* 원하는 크기로 설정하세요 */
    height: 24px; /* 원하는 크기로 설정하세요 */
    display: flex;
    align-items: center;
    /* 다른 스타일 속성을 추가로 설정할 수도 있습니다. */
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
  width: 1920px;
  height: 125px;
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
  padding:0 6px
`;

const HeaderCenter = styled.div`
  width: 50%;
`;

const HeaderForm = styled.form`
  display: flex;
  max-width: 100%;
`;

const HeaderInputText = styled.input`
  width: calc(100% - 60px);
  height: 40px;
  padding: 0 6px;
  border: 1px solid #8f8f8f;
  border-right: none;
  border-radius: 2px 0 0 2px;
`;

const HeaderInputButton = styled.button`
  width: 60px;
  height: 40px;
  padding: 0 6px;
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
  /* background-size: */
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

const MenuButton = styled.button`
  display: box;
  margin-Top: 10px
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [stores, setStores] = useState([]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // 검색창의 상태를 토글합니다.
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = () => {
    // 검색 버튼을 누르면 서버로 검색어를 전송하고, 매장 정보를 받아옵니다.
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
          <HeaderHamburger onClick={toggleMenu}><Icon.Menu/></HeaderHamburger>
          
          <HeaderTitle>로고</HeaderTitle>
          </StyledIcon>
        <HeaderCenter>
        {isSearchOpen &&(
          <HeaderForm onSubmit={(e) => e.preventDefault()}>
           <StyledIcon>
          <HeaderInputButton onClick={handleSearch}><Icon.Search/></HeaderInputButton>
          </StyledIcon> 
            <HeaderInputText
              placeholder="장소 검색"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            
            
          </HeaderForm>
        )}
        </HeaderCenter>
        <HeaderEnd>
          <HeaderSearch></HeaderSearch>
          <StyledIcon>
          <HeaderInputButton onClick={toggleSearch}><Icon.Search/></HeaderInputButton>
          <HeaderInputButton onClick><Icon.Dark/></HeaderInputButton>
          <HeaderInputButton onClick><Icon.Option/></HeaderInputButton>
          </StyledIcon>
          
        </HeaderEnd>
      </HeaderWrapper>
      <div className="menu-container">
        {isMenuOpen && (
          <Menu isOpen={isMenuOpen} onClick={toggleMenu}>
            <MenuButton>
            <HeaderInputButton>메뉴 항목 1</HeaderInputButton>
            <HeaderInputButton>메뉴 항목 2</HeaderInputButton>
            <HeaderInputButton>메뉴 항목 3</HeaderInputButton>
            </MenuButton>
          </Menu>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;