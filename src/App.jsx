import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import ProductPreview from "./components/ProductPreview";
import Photos from "./components/Photos";

const App = () => {

  const darkTheme = {
    background: "#0A1C1C",
    primary: "#BECCFF",
    secondary: "#64686C",
    text: "#CECECE",
    accent: "#DE6100",

    font: "'Kumbh Sans', sans-serif",
  }


  const [previewPhotos, setPreviewPhotos] = useState(false);

  const togglePreview = () => {
    setPreviewPhotos(!previewPhotos);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        {
          previewPhotos &&
          <>
            <Photos preview={true} togglePreview={togglePreview} />
            <Tint />
          </>
        }
        <ProductPreview togglePreview={togglePreview} />
      </Container>
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
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

const Tint = styled.div`
    background-color: rgba(0, 0, 0, .7);
    z-index: 4;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;