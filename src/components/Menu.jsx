import React from 'react'
import styled from "styled-components"
import HomeIcon from '@mui/icons-material/Home';
const Container = styled.div`
  flex:1;
  background-color: #202020;
  height: 100vh;
  color:white;
`;
const Wrapper = styled.div`
padding: 18px 26px;

`;
const Logo = styled.div`
display: flex;
align-items:center;
gap: 5px;
font-weight: bold;
margin-bottom: 25px;
`;
const Img = styled.img`
  height: 50px;

`

const Item = styled.div`
display: flex;
align-items:center;
gap: 20px;
cursor: pointer;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
       <Logo>
        <Img src="https://cdn.dribbble.com/userupload/2445208/file/original-36e8f98866a8475c749554b2e3cecf95.png?resize=400x0" />
        MoTube
       </Logo>
       <Item>
        <HomeIcon/>
        Home
       </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu