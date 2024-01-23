import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import ProductPreview from "./components/ProductPreview";
import Photos from "./components/Photos";

import close from './assets/icons/close.svg';
import next from './assets/icons/next.svg';
import prev from './assets/icons/prev.svg';

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
          <PreviewContainer>
            <CloseIcon src={close} alt="close icon" onClick={() => togglePreview()} />
            <Arrows src={prev} alt="previous picture icon" position="left" />
            <Photos preview={true} togglePreview={false} />
            <Arrows src={next} alt="next picture icon" position="right" />
          </PreviewContainer>
        }
        { previewPhotos && <Tint /> }
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

const PreviewContainer = styled.div`
      position: fixed;
      width: 30%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 5;
      min-width: 350px;
`;

const Tint = styled.div`
    background-color: rgba(0, 0, 0, .7);
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const CloseIcon = styled.img`
  height: 1.5rem;
  position: absolute;
  top: -8%;
  right: 0;
  cursor: pointer;
`;

const Arrows = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  top: 40%;
  left: ${props => props.position === "left" ? "-5%" : "95%"};
  cursor: pointer;
`;