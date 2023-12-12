import styled from 'styled-components';

//Hero Section

export const  HeroStyles = styled.section`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #9b9999;
`

export const HeroCard = styled.div`
    height: 400px;
    width: 230px;
    background-color: #0f0f0f;
    transform-style: preserve-3d;
    border-radius: 20px;
    box-shadow: 0 0 50px 0px, inset 0 0 90px 0px;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

export const HeroLogo = styled.h2`
    font-size: 1.4rem;
    color: #fb8500;
    letter-spacing: 1px;
`
export const HeroLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 9rem;
    width: 6rem;
    height: 2rem;
    border-radius: 10px;
    border: 1px solid #fb86006e;
    opacity: 0;
    transition: .2s ease-in;
    text-decoration: none;
`
//Hero Section



