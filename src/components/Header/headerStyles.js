import styled from 'styled-components';

//Header & Nav

export const HeaderStyles = styled.header`
    width: 100%;
    height: 5.8rem;
    background: var(--card-hero);
    position: sticky;
    top: 0;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 2px 0px var(--card-txt-gold);
`

export const NavLogo = styled.img`
    margin-left: 1rem;
    height: 7rem;
    transition: all 0.5s ease-out;
    cursor: pointer;
    user-select: none;
    &:hover {
        filter: drop-shadow(0 0 0.75rem #fb8600);
        transition: all 0.5s ease-in;
    }
@media (max-width: 1200px) {
    height: 5rem; 
}
`

export const NavContainer = styled.ul`
    display: flex;
    gap: 5rem;
    user-select: none;
@media (max-width: 1200px) {
    gap: 2rem;
    }
@media (max-width: 768px) {
    transform: translateX(${props => props.isOpen ? '0' : '-100vw'});
    transition: transform 0.3s ease-in-out, visibility 2s ease-in-out;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    position: absolute;
    top: 5.8rem;
    right: 0;
    width: 100%;
    height: 20rem;
    background: transparent;
    backdrop-filter: blur(40px);
    border-bottom: 2px solid var(--card-txt-gold);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top: 1px solid var(--card-txt-gold);
    z-index: 3;
    &:first-child {
        padding-top: 1.5rem;
    }
  }

`


export const NavLink = styled.li`
    font-size: 1.2rem;
    font-family: 'Cinzel', serif;
    font-weight: 400;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.3rem;
    width: 8rem;
    cursor: pointer;
    border-radius: 30px;
    transition: all .5s ease-out;
    &:hover {
        transform: scale(0.97);
        box-shadow: 0 0 0 1px var(--card-txt-gold);
        transition: all .2s ease-in;
    }

    a {
        color: var(--card-txt-gold);
    }

@media (max-width: 1200px) {
    font-size: 1rem;
}

@media (max-width: 768px) {
    &:hover {
        transform: scale(1);
        box-shadow: 0 0 0 0 var(--card-txt-gold);
        width: 100%;
        height: 3rem;
        border-radius: 0;
        border-top: 1px solid var(--card-txt-gold);
        border-bottom: 1px solid var(--card-txt-gold);
        background: transparent;
        transition: all .2s ease-in;
        
    }

    &:hover a {
        color: white;
    }
}

`


export const NavFeatured = styled.span`
    font-weight: 800;
`

export const ToggleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 1rem;
    user-select: none;
`

export const CartToggle = styled.div`
    margin: 0 2rem;
    border: 2px solid var(--bg-grey);
    height: 3.8rem;
    width: 3.8rem;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s ease-out;
@media (max-width: 1200px) {
    height: 2.8rem;
    width: 2.8rem;
}

@media (max-width: 768px) {
    margin: 0;
}

`
export const MenuToggleContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    height: 2.8rem;
    width: 2.8rem;
    border: 2px solid var(--bg-grey);
    border-radius: 50%;
    color: white;
    cursor: pointer;
    user-select: none;
    transition: all .3s ease-out;

    &:hover {
    transform: scale(1.05);
    border: 1px solid white;
    box-shadow: 0 0px 6px var(--card-txt-gold);
    background: var(--card-txt-gold);
    transition: all .3s ease-in;
    }

@media (max-width: 768px) {
    display: flex;
    margin-right: 1rem;
}
`

//Header & Nav