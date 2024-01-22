import { useState } from "react";
import styled from "styled-components";

import Nav from "./Nav";
import Product from "./Product";
import Photos from "./Photos";

const ProductPreview = () => {

    const [previewPhotos, setPreviewPhotos] = useState(false);

    const togglePreview = () => {
        setPreviewPhotos(!previewPhotos);
    }

    return (
        <Container>
            <Nav />

            {
                previewPhotos &&
                <>
                    <Photos preview={true} togglePreview={togglePreview} />
                    <Tint />
                </>
            }

            <ProductInfo>
                <Photos preview={false} togglePreview={togglePreview} />
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

const Tint = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1;
`;