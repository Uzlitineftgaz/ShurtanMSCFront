import styled from "styled-components"

// admin page
export const ContainerFluid = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
`
export const Input = styled.input`
    background: #F2F2F2;
    border-radius: 5px;
    width:150%;
    padding: 0.75rem 1.5rem;
    margin-bottom: 20px;
    outline:none;
    border:none;
    &::placeholder{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
        opacity: 0.5;
    }
    &:focus{
        border:1px solid #3393DB;
        box-shadow: 0 0 2px 2px #3392db6c; 
    }
`
export const Button = styled.button`
    width: 100%;
    padding:0.75rem 1.5rem;
    outline: none;
    background: #00A0DC;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    &:focus{
        box-shadow: 0 0 2px 2px #3392db6c;
    }
`

// Navbar
export const H1 = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #363636;
    cursor: pointer;
    z-index: 2;
`
export const P = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #363636;
    cursor: pointer;
    z-index:2;
`
export const NavbarCard = styled.div`
    display: flex;
`
export const HumanImg = styled.img`
    margin-right: 10px;
`
export const DateAndOclock = styled.div`
    z-index:2;
    width: 150px;
`
export const DateP = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #363636;
`
export const OclockP = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #363636;
`
export const Burger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    cursor: pointer;
`
export const BtnBurger = styled.div`
    background: #363636;
    width: 40px;
    height: 4px;
`

// MainPage
export const FirstBox = styled.div`
    display: grid;
    grid-template-rows: 319px 160px 348px;
    grid-gap: 5px;
`
export const SecondBox = styled.div`
    display: grid;
    grid-template-rows: 120px 535px 175px;
    grid-gap: 5px;
`
export const ThirdBox = styled.div`
    display: grid;
    grid-template-rows: 296px 271px 271px;
    grid-gap: 5px;
`

// AddGas
export const Table = styled.table`
    width:100%;
    border: 0px solid #F4B790;
    border-collapse: ;
    overflow-y: scroll;
    display: block;
`
export const TableScroll = styled.table`
    border-collapse: collapse;
    overflow-y: scroll;
    display: block;
`
export const Tr = styled.tr`
    border: 1px solid #F4B790;
`
export const Th = styled.th`
    border: 1px solid #F4B790;
    background: #C3E7FA;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    color: #363636;
    padding: 2px;
`
export const TdFirst = styled.td`
    border: 1px solid #F4B790;
    background: #FFE5D3;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    color: #363636;
    padding: 2px;
`
export const Td = styled.td`
    background: #FAFAFA;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: #363636;
`
export const TdTotal = styled.td`
    border: 1px solid #F4B790;
    background: #FFE5D3;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 1000;
    font-size: 14px;
    text-align:center;
    color: #363636;
    padding: 2px;
    position: sticky;
    bottom: 0;
`
export const TdTotalCount = styled.td`
    background: #FFE5D3;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: #363636;
    padding: 2px;
    position: sticky;
    bottom: 0;
`

// GasBalance

// Map

export const MainPageImg = styled.img`
    width: 100%;
    height: 100%;
`
export const MapBox = styled.div`
    position: relative;
    background: #fff;
    transition: 2s ease;
    margin: 0 auto;
    z-index: 2;
    /* &:hover{
        transform: scale(1.3, 1.3);
        z-index:2;
        box-shadow: 0 4px 8px #999;
    } */
`
export const HeadImg = styled.img`
    width:100px;
    height: 100px;
    position: absolute;
    z-index: 3;
    top:265px;
    right:100px;
    transition: 1.5s ease;
    cursor: pointer;
    &:hover{
        transform: scale(1.2, 1.2);
        z-index:2;
    }
`