import { useState, useEffect } from "react";
import styled from "styled-components";

import picture1 from '../assets/product/product-1.jpg';
import picture2 from '../assets/product/product-2.jpg';
import picture3 from '../assets/product/product-3.jpg';
import picture4 from '../assets/product/product-4.jpg';


import thumb1 from '../assets/product/product-1-thumbnail.jpg';
import thumb2 from '../assets/product/product-2-thumbnail.jpg';
import thumb3 from '../assets/product/product-3-thumbnail.jpg';
import thumb4 from '../assets/product/product-4-thumbnail.jpg';


const Photos = ({
    preview,
    togglePreview,
}) => {

    const [photos, setPhotos] = useState([
        picture1,
        picture2,
        picture3,
        picture4
    ])
    const [displayPhoto, setDisplayPhoto] = useState(picture1);
    const [activeThumbnail, setActiveThumbnail] = useState(1);

    const changePhoto = (src) => {
        setDisplayPhoto(src);
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

    return (
        <Container $preview={preview}>
            <MainPhoto 
                src={displayPhoto}
                onClick={() => togglePreview()}
                $preview={preview}
            />
            <Gallery>
                <ThumbnailContainer
                    onClick={() => changePhoto(picture1)}
                    $active={activeThumbnail === 1 ? true : false}
                >
                    <Thumbnail src={thumb1} />
                </ThumbnailContainer>

                <ThumbnailContainer
                    onClick={() => changePhoto(picture2)}
                    $active={activeThumbnail === 2 ? true : false}
                >
                    <Thumbnail src={thumb2} />
                </ThumbnailContainer>

                <ThumbnailContainer
                    onClick={() => changePhoto(picture3)}
                    $active={activeThumbnail === 3 ? true : false}
                >
                    <Thumbnail src={thumb3} />
                </ThumbnailContainer>

                <ThumbnailContainer
                    $active={activeThumbnail === 4 ? true : false}
                    onClick={() => changePhoto(picture4)}
                >
                    <Thumbnail src={thumb4} />
                </ThumbnailContainer>
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

    ${props => props.$preview && `
        width: 100%;
    `}
`;

const MainPhoto = styled.img`
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 16px;
    cursor: pointer;

    ${props => props.$preview && `
        cursor: default;
    `}
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
`;

const ThumbnailContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;

    ${props => props.$active && `
        border: 2px solid ${props.theme.accent};

        &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    0deg, 
                    rgba(255, 255, 255, 0.55) 0%,
                    rgba(255, 255, 255, 0.55) 100%);
                z-index: 3;
            }
    `}
`;

const Thumbnail = styled.img`
    width: 100%;
`;