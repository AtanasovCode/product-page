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

import next from '../assets/icons/next.svg';
import prev from '../assets/icons/prev.svg';


const Photos = ({
    preview,
    togglePreview,
    changePhoto,
    activeThumbnail,
    displayPhoto,
    showPrevPhoto,
    showNextPhoto,
}) => {

    return (
        <Container $preview={preview}>
            <MainPhotoContainer>
                <Arrows
                    src={prev}
                    alt="previous picture icon"
                    position="left"
                    onClick={() => showPrevPhoto()}
                />
                <MainPhoto
                    src={displayPhoto}
                    onClick={() => togglePreview()}
                    $preview={preview}
                />
                <Arrows
                    src={next}
                    alt="previous picture icon"
                    position="right"
                    onClick={() => showNextPhoto()}
                />
            </MainPhotoContainer>
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

    @media (max-width: 950px) {
        width: 70%;
    }

    @media (max-width: 675px) {
        width: 100%;
    }
`;

const MainPhotoContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
    background-color: red;
`;

const MainPhoto = styled.img`
    width: 100%;
    border-radius: 16px;
    cursor: pointer;

    ${props => props.$preview && `
        cursor: default;
    `}

    @media (max-width: 675px) {
        border-radius: 0;
        margin-bottom: 1rem;
        cursor: default;
    }
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;

    @media (max-width: 950px) {
        grid-gap: .8rem;
    }

    @media (max-width: 675px) {
        display: none;
    }
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

const Arrows = styled.img`
    display: none;

    @media (max-width: 675px) {
        display: block;
        position: absolute;
        width: 3rem;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);

        ${props => props.position === "left" && `
            left: 5%;
        `}

        ${props => props.position === "right" && `
            right: 5%;
        `}
    }
`;