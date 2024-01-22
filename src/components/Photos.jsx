import { useState } from "react";
import styled from "styled-components";

import picture1 from '../assets/product/product-1.jpg';
import picture2 from '../assets/product/product-2.jpg';
import picture3 from '../assets/product/product-3.jpg';
import picture4 from '../assets/product/product-4.jpg';


import thumb1 from '../assets/product/product-1-thumbnail.jpg';
import thumb2 from '../assets/product/product-2-thumbnail.jpg';
import thumb3 from '../assets/product/product-3-thumbnail.jpg';
import thumb4 from '../assets/product/product-4-thumbnail.jpg';


const Photos = () => {

    const [photos, setPhotos] = useState([
        picture1,
        picture2,
        picture3,
        picture4
    ])
    const [displayPhoto, setDisplayPhoto] = useState(picture1);

    const changePhoto = (src) => {
        setDisplayPhoto(src);
    }

    return (
        <Container>
            <MainPhoto src={displayPhoto} />
            <Gallery>
                <Thumbnail src={thumb1} onClick={() => changePhoto(picture1)} />
                <Thumbnail src={thumb2} onClick={() => changePhoto(picture2)} />
                <Thumbnail src={thumb3} onClick={() => changePhoto(picture3)} />
                <Thumbnail src={thumb4} onClick={() => changePhoto(picture4)} />
            </Gallery>
        </Container>
    );
}

export default Photos;

const Container = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainPhoto = styled.img`
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 16px;
    cursor: pointer;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
`;

const Thumbnail = styled.img`
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
`;