import { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import ProductPreview from "./components/ProductPreview";
import Photos from "./components/Photos";

import close from './assets/icons/close.svg';
import next from './assets/icons/next.svg';
import prev from './assets/icons/prev.svg';


import picture1 from './assets/product/product-1.jpg';
import picture2 from './assets/product/product-2.jpg';
import picture3 from './assets/product/product-3.jpg';
import picture4 from './assets/product/product-4.jpg';

const App = () => {

  const darkTheme = {
    background: "#0A1C1C",
    primary: "#BECCFF",
    secondary: "#64686C",
    text: "#CECECE",
    accent: "#DE6100",

    font: "'Kumbh Sans', sans-serif",
  }


  const [photos, setPhotos] = useState([
    picture1,
    picture2,
    picture3,
    picture4
  ])
  const [displayPhoto, setDisplayPhoto] = useState(picture1);
  const [activeThumbnail, setActiveThumbnail] = useState(1);
  const [previewPhotos, setPreviewPhotos] = useState(false);

  const [itemAdded, setItemAdded] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0);

  const increaseItemsInCart = () => {
    let temp = itemsInCart;

    temp++;
    setItemsInCart(temp);
  }

  const addItemToCart = () => {
    setItemAdded(true);
    if(itemsInCart === 0) increaseItemsInCart()
  }

  const removeItemFromCart = () => {
    setItemAdded(false);
    console.log("te");
    setItemsInCart(0);
  }

  const decreaseItemsInCart = () => {
    let temp = itemsInCart;

    if (temp > 0) temp--;

    setItemsInCart(temp);
  }

  //change the main active photo
  const changePhoto = (src) => {
    setDisplayPhoto(src);
  }

  //Turns the photo preview mode on/off
  const togglePreview = () => {
    setPreviewPhotos(!previewPhotos);
  }

  //sets the active thumbnail based on the display photo
  useEffect(() => {
    switch (displayPhoto) {
      case picture1: setActiveThumbnail(1); break;
      case picture2: setActiveThumbnail(2); break;
      case picture3: setActiveThumbnail(3); break;
      case picture4: setActiveThumbnail(4); break;
    }

  }, [displayPhoto])

  const getNextPhotoIndex = () => {
    const currentIndex = photos.indexOf(displayPhoto);
    return (currentIndex + 1) % photos.length;
  }

  const getPrevPhotoIndex = () => {
    const currentIndex = photos.indexOf(displayPhoto);
    return (currentIndex - 1 + photos.length) % photos.length;
  }

  const showNextPhoto = () => {
    const nextIndex = getNextPhotoIndex();
    setDisplayPhoto(photos[nextIndex]);
    setActiveThumbnail(nextIndex + 1);
  }

  const showPrevPhoto = () => {
    const prevIndex = getPrevPhotoIndex();
    setDisplayPhoto(photos[prevIndex]);
    setActiveThumbnail(prevIndex + 1);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        {
          previewPhotos &&
          <PreviewContainer>
            <CloseIcon src={close} alt="close icon" onClick={() => togglePreview()} />
            <Arrows
              src={prev}
              alt="previous picture icon"
              position="left"
              onClick={() => showPrevPhoto()}
            />
            <Photos
              preview={true}
              togglePreview={false} //Dont allow the preview to be cancelled by clicking on the photo
              displayPhoto={displayPhoto}
              changePhoto={changePhoto}
              activeThumbnail={activeThumbnail}
            />
            <Arrows
              src={next}
              alt="next picture icon"
              position="right"
              onClick={() => showNextPhoto()}
            />
          </PreviewContainer>
        }

        {previewPhotos && <Tint />}

        <ProductPreview
          togglePreview={togglePreview}
          displayPhoto={displayPhoto}
          changePhoto={changePhoto}
          activeThumbnail={activeThumbnail}
          itemsInCart={itemsInCart}
          increaseItemsInCart={increaseItemsInCart}
          decreaseItemsInCart={decreaseItemsInCart}
          itemAdded={itemAdded}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          showPrevPhoto={showPrevPhoto}
          showNextPhoto={showNextPhoto}
        />
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

      @media (max-width: 675px) {
        display: none;
      }
`;

const Tint = styled.div`
    background-color: rgba(0, 0, 0, .7);
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 675px) {
        display: none;
      }
`;

const CloseIcon = styled.img`
  height: 1.5rem;
  position: absolute;
  top: -8%;
  right: 0;
  cursor: pointer;
`;

export const Arrows = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  top: 40%;
  left: ${props => props.position === "left" ? "-5%" : "95%"};
  cursor: pointer;
`;