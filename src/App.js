import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/Navbar.jsx";
import './App.css';
import { darkTheme, lightTheme } from "./utils/Theme.js";

const Container = styled.div`
display: flex;

`;

const Main = styled.div`
flex:7;
background-color: ${({ theme }) => theme.bgLighter};
`;

const Wrapper = styled.div``;

function App() {
const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme  : lightTheme} >
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar />
        <Wrapper>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
         <h1>Test</h1>
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
