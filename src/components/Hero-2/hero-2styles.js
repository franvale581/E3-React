import styled from 'styled-components';

//Second Hero Section

export const SecondHeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 665px;
    background: var(--card-hero);
`
export const SHeroContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30rem;
    box-shadow: 0 0 3px 1px var(--card-txt-gold);
    &:hover {
        height: 100%;
        transition: all 0.2s ease-in;
    }

// mediaqueris hero 2 
@media (max-width: 1200px) {
    height: 100%;
    flex-direction: column-reverse;
}
`

export const SHeroImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: #0000;
    padding: 2rem;
/* tablet */ 
@media (max-width: 740px) {
    padding: 5rem 0;
}
/* mobile */
@media (max-width: 576px) {
    padding-top: 0;
    padding-bottom: 3rem;
}
`

export const SHeroImg = styled.img`
    transform: translateX(-400px);
    height: 24rem;
    border-radius: 50%;
    box-shadow: 3px 2px 5px 2px black;
    user-select: none;
    transition: all 0.5s ease-out;

@media (max-width: 1200px) {
    transform: none;
    height: 12rem;
}
/* tablet */ 
@media (max-width: 740px) {
    height: 10rem;
}
/* mobile */
@media (max-width: 576px) {
    height: 8rem;
}
`

export const SHeroInfoContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    align-items: start;
    padding: 2rem;
    & h2 {
        opacity: 0;
        transform: translateX(-300px);
        font-family: 'Cinzel', serif;
        font-size: 1.8rem;
        color: var(--card-txt-gold);
        letter-spacing: 1px;
        transition: all 0.5s ease-out;
    }

    & p {
        opacity: 0;
        transform: translateX(-300px);
        font-family: 'Cinzel', serif;
        font-size: 1.2rem;
        font-weight: 600;
        color: white;
        line-height: 40px;
        transition: all 0.5s ease-out;
    }

@media (max-width: 1200px) {
    align-items: center;
    gap: 3rem;
    padding: 0;

        & h2 {
            margin-top: 4rem;
            transform: none;
            opacity: 1;
            font-size: 1.3rem;
        }

        & p {
            opacity: 1;
            transform: none;
            font-size: 1rem;
            text-align: center;
        }


}
/* tablet */ 
@media (max-width: 740px) {
    width: 100%;
    padding: 0 4rem;
    & h2 {
            font-size: 1rem;
        }

        & p {
            font-size: 0.8rem;
        }
}
/* mobile */
@media (max-width: 576px) {
    padding: 2rem;
}
@media (max-width: 576px) {
    margin-top: 3rem;
    padding: 1rem;
    & h2 {
        font-size: 0.8rem;
    }
    & p {
        font-size: 0.7rem;
    }
}
`
export const BoldText = styled.span`
    color: var(--card-txt-gold);
    text-shadow: 1px 1px 0px #202020;
`
//Second Hero Section