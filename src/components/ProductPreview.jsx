import styled from "styled-components";

import Nav from "./Nav";

const ProductPreview = () => {
    return (
        <Container>
            <Nav />
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