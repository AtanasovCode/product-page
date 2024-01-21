import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const App = () => {

  const darkTheme = {
    background: "#0A1C1C",
    primary: "#BECCFF",
    secondary: "#64686C",
    text: "#CECECE",
    accent: "#DE6100",

    font: "'Kumbh Sans', sans-serif",
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background};
  font-family: ${props => props.theme.font};
  display: flex;
  align-items: center;
  justify-content: center;
`;