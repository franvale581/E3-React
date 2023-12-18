import styled from 'styled-components'

//Featured Section

export const FeaturedContainer = styled.section`
width: 100%;
height: 900px;
background: var(--card-hero);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
user-select: none;

@media (max-width: 1200px) {
    height: 125rem;
}

.featured-card:hover img {
    filter: blur(3px);
    transform: scale(1.05);
    transition: all 0.3s ease-in;
}

.featured-card:hover .featured-info {
    opacity: 1;
    transform: translateY(0px);
    transition: all 0.32s ease-in;
}

`

export const FeaturedTitle = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Cinzel', serif;
    & h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #e2711d;
        font-size: 2.3rem;
        letter-spacing: 10px;
        background: dark;
        border: 1px solid var(--card-txt-gold);
        border-left: none;
        border-right: none;
        height: 5rem;
        width: 100%;
        transform-style: preserve-3d;
    }

@media (max-width: 1200px) {
    margin: 0;
    justify-content: center;
    & h2 {
        font-size: 2.5rem;
    }
}

@media (max-width: 740px) {
    & h2 {
        font-size: 1.7rem;
    }
}
/* mobile */
@media (max-width: 576px) {
    & h2 {
        height: 3.3rem;
        width: 100%;
        border-radius: 0;
        border-left: none;
        border-right: none;
    }
}
`

export const FeaturedProductsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 5.5rem;
padding-bottom: 11rem;

@media (max-width: 1200px) {
    flex-direction: column;
    padding-bottom: 6rem;
}

`

export const FeaturedCard = styled.div`
width: 20rem;
max-width: 20rem;
height: 32rem;
background: var(--card-txt-grey);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
overflow: hidden;
border: 2px solid var(--card-txt-gold);
filter: invert(0%);
transition: all 0.3s ease-out;
    &:hover {
        filter: invert(0);
        box-shadow: 0 0 30px 1px var(--card-txt-gold);
        transition: all 0.3s ease-in;    
    }

@media (max-width: 1200px) {
    width:  22rem;
}
/* mobile */
@media (max-width: 576px) {
    width: 18rem;
}
`

export const FeaturedImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
transition: all 0.3s ease-out;

& img {
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: blur(0px);
  transition: transform 0.3s ease-out;
}

`

export const FeaturedInfo = styled.div`
font-family: 'Cinzel', serif;
transform: translateY(200px);
background: var(--ft-bg-light);
opacity: 0;
position: absolute;
bottom: 0;
height: 100%;
width: 100%;
padding: 4rem 1.5rem 4rem 1.5rem;
color: #e2711d;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
text-align: center;
transition: all 0.4s ease-out;

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 800;
  width: 100%;
  color: white;
  text-shadow: 1px 1px 0px black;
  letter-spacing: 1px;
}

.f-info-title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.2rem;
}

.featured-smallbar {
    width: 8rem;
    height: .4rem;
    border-radius: 15px;
    box-shadow: 0 0 15px 2px var(--card-txt-gold);
    background: var(--card-txt-gold);
}

p {
  font-size: 0.8rem;
}
/* mobile */
@media (max-width: 576px) {
    border-top: 1px solid var(--card-txt-gold);
    box-shadow: 1px 0 8px 0 var(--card-txt-gold) ;
}
`

export const FeaturedButton = styled.button`
text-transform: uppercase;
font-size: 0.7rem;
font-weight: 800;
width: 70%;
background: var(--bg-dark);
color: #e2711d;
box-shadow: 0 0 1px 1px var(--card-txt-gold);
padding: 0.5rem 1rem;
border: none;
border-radius: 5px;
cursor: pointer;
transition: all 0.2s ease-out;

&:hover {
    transform: scale(1.05);
    color: white;
    transition: all 0.2s ease-in;
}
`

//Featured Section