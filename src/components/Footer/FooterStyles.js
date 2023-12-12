import styled from 'styled-components';

//footer 
export const FooterContainer = styled.footer`
    width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--card-hero);
    border-top: 2px solid #202020;
    gap: 4rem;
    user-select: none;    
`

export const FooterTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 4rem;
    & img {
        height: 6rem;
        border-radius: 50%;
        border: 1px solid var(--card-txt-gold);
    }
    & small {
        width: 40%;
        height: 2px;
        background: #202020;
    }
/* mobile */
@media (max-width: 576px) {
    & img {
        height: 5rem;
    }
    & small {
        width: 80%;
    }
}
`

export const FooterMid = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    & a {
        display: flex;
        align-items: center;
        justify-content: center; 
        width: 2.9rem;
        height: 2.9rem;
        border-radius: 20%;
        border: 1px solid var(--bg-grey);
        transition: all 0.3s ease-out;
    }

    & i {
        transition: all 0.3s ease-out;
    }
    /* mobile */
@media (max-width: 576px) {
    gap: 3rem;
    & a {
        width: 2.3rem;
        height: 2.3rem;
    }
    & i {
        font-size: 1.4rem;
    }
}
`

export const FooterBottom = styled.div`
    width: 100%;
    height: 3rem;
    background: #050505;
    display: flex;
    justify-content: center;
    align-items: center;
    & h3 {
        text-transform: italic;
        color: #202020;
        font-size: 1.1rem;
        font-style: italic;
    }
`

//footer 