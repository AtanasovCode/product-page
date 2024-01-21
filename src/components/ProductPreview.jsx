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
    width: 100%;
`;