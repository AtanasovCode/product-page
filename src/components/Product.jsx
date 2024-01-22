import styled from "styled-components";

import plus from '../assets/icons/plus.svg';
import minus from '../assets/icons/minus.svg';

const Product = () => {
    return (
        <Container>
            <CompanyName>
                sneakers company
            </CompanyName>
            <ProductName>
                Fall Limited Edition Sneakers
            </ProductName>
            <ProductDescription>
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they’ll withstand
                everything the weather can offer.
            </ProductDescription>
            <PriceContainer>
                <CurrentPrice>
                    <Price>$125.00</Price>
                    <Discount>50%</Discount>
                </CurrentPrice>
                <OriginalPrice>
                    $250.00
                </OriginalPrice>
            </PriceContainer>
            <ButtonsContainer>
                <ProductNumber>
                    <AddIcon src={plus} alt="plus icon" />
                    <Number>0</Number>
                    <AddIcon src={minus} alt="minus icon" />
                </ProductNumber>
                <CartButton>
                    Add to cart
                </CartButton>
            </ButtonsContainer>
        </Container>
    );
}

export default Product;

const Container = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.text};
`;

const CompanyName = styled.div`
    color: ${props => props.theme.secondary};
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
`;

const ProductName = styled.div`
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem
`;

const ProductDescription = styled.div`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
    margin: 2rem 0;
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 2rem;
`;

const CurrentPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .3rem;
`;

const Price = styled.div`
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 2rem;
`;

const Discount = styled.div`
    border-radius: 0.375rem;
    background: ${props => props.theme.accent};
    color: #FFF;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: .25rem .5rem;
`;

const OriginalPrice = styled.div`
    color: ${props => props.theme.secondary};
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625rem; /* 162.5% */
    text-decoration: line-through;
`;

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProductNumber = styled.div`
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid ${props => props.theme.accent};
    border-radius: 0.625rem;
    margin-right: 1rem;
`;

const AddIcon = styled.img`
    cursor: pointer;
`;

const Number = styled.div`
    color: ${props => props.theme.accent};
`;

const CartButton = styled.div`
    flex: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.accent};
    border: none;
    border-radius: 0.625rem;
    color: #FFF;
    font-weight: 700;
    padding: 1rem;
`;