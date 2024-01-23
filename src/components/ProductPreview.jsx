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
}) => {

    return (
        <Container>
            <Nav />

            <ProductInfo>
                <Photos 
                    preview={false} 
                    togglePreview={togglePreview}
                    displayPhoto={displayPhoto}
                    activeThumbnail={activeThumbnail}
                    changePhoto={changePhoto}
                />
                <Product />
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
        margin: 2rem 1rem;
    }
`;

const ProductInfo = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
`;
