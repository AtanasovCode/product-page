import { useState } from "react";
import styled from "styled-components";

import Nav from "./Nav";
import Product from "./Product";
import Photos from "./Photos";

const ProductPreview = ({
    togglePreview,
    displayPhoto,
    activeThumbnail,
    changePhoto,
    itemsInCart,
    increaseItemsInCart,
    decreaseItemsInCart,
    itemAdded,
    addItemToCart,
    removeItemFromCart,
    showPrevPhoto,
    showNextPhoto,
}) => {

    return (
        <Container>
            <Nav 
                itemsInCart={itemsInCart}
                itemAdded={itemAdded}
                removeItemFromCart={removeItemFromCart}
            />

            <ProductInfo>
                <Photos 
                    preview={false} 
                    togglePreview={togglePreview}
                    displayPhoto={displayPhoto}
                    activeThumbnail={activeThumbnail}
                    changePhoto={changePhoto}
                    showPrevPhoto={showPrevPhoto}
                    showNextPhoto={showNextPhoto}
                />
                <Product 
                    itemsInCart={itemsInCart}
                    increaseItemsInCart={increaseItemsInCart}
                    decreaseItemsInCart={decreaseItemsInCart}
                    addItemToCart={addItemToCart}
                />
            </ProductInfo>
        </Container>
    );
}

export default ProductPreview;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 2rem;

    @media (max-width: 950px) {
        width: 90%;
        margin: 2rem 1rem;
    }

    @media (max-width: 675px) {
        width: 100%;
        margin: 2rem 0;
    }
`;

const ProductInfo = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;

    @media (max-width: 950px) {
        flex-direction: column;  
        align-items: center;
        justify-content: center; 
    }
`;
