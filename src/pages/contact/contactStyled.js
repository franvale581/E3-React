import styled from 'styled-components';

export const ContactSect = styled.section`
    height: 200vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: var(--card-hero);

@media (max-width: 740px) {
    height: 280vh;
}

.flip-card {
  background-color: transparent;
  width: 15rem;
  height: 25rem;
  perspective: 1000px;
  font-family: sans-serif;
  cursor: pointer;
}

.card-title-front {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 8rem;
    font-family: 'Abril Fatface', serif;
    text-shadow: 4px 0 var(--card-txt-gold);
    letter-spacing: 5px;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    color: var(--card-hero);
}

.card-info {
    padding: 0 2rem;
    font-size: 0.8rem;
}

.card-icon {
    display: flex;
    justify-content: center;
    align-items: center; 
    position: absolute;
    top: 4rem;
    border-radius: 50%;
    padding: 1rem;
    font-size: 4rem;
    color: var(--card-txt-gold);
    background: var(--card-hero);
}

.card-info-front {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 3rem;
    background: var(--card-hero);
    color: var(--card-txt-gold);
    border-bottom: 1px solid var(--card-txt-gold);
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 1rem;
}

.flip-card-front {
    background-image: linear-gradient(to right top, #fb5607, #fb6003, #fb6901, #fb7200, #fb7a00, #fb7a00, #fb7a00, #fb7a00, #fb7200, #fb6901, #fb6003, #fb5607);
}

.flip-card-back {
    background: linear-gradient(120deg, var(--ft-bg) 60%, var(--ft-bg) 88%, var(--ft-bg-light) 40%, var(--card-txt-gold) 48%);
    transform: rotateY(180deg);
    color: var(--card-txt-gold);
}
`

export const ContactTitle = styled.div`
    text-align: center;
    position: absolute;
    top: 8rem;
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
        font-size: 2rem;
        letter-spacing: 10px;
        background: dark;
        border: 1px solid var(--card-txt-gold);
        height: 5rem;
        width: 100%;
        border-left: none;
        border-right: none;
        transform-style: preserve-3d;
    }

@media (max-width: 1200px) {
    margin: 0;
    justify-content: center;
    & h2 {
        font-size: 1.5rem;
    }
}

@media (max-width: 740px) {
    & h2 {
        font-size: 1rem;
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
        font-size: .8rem;
    }
}

`

export const ContactCards = styled.div`
    margin-top: 10rem;
    gap: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) {
        gap: 5rem;
}
@media (max-width: 913px) {
        gap: 2rem;
}

@media (max-width: 740px) {
    flex-direction: column;
}
`

export const ContactFormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .form-container {
        width: 80vw;
        background: linear-gradient(#212121, #212121);
        border: 1px solid var(--card-txt-gold);
        padding: 3rem 1.5rem;
        font-size: 1rem;
        font-family: 'Roboto Slab', serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: white;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
}

.form-container button:active {
  scale: 0.95;
  transition: all 0.3s ease-in-out;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 410px) {
  gap: 4px; 
}
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group label {
  color: #717171;
  font-weight: 600;
  font-size: 0.7rem;
  @media (max-width: 410px) {
    font-size: 0.6rem;
}
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--card-txt-gold);
  font-family: 'Poppins', sans-serif;
  background-color: transparent;
  border: 1px solid #414141;
  letter-spacing: 1px;
@media (max-width: 410px) {
    padding: 5px 8px;
}
}

.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #fff;
  height: 96px;
  border: 1px solid #414141;
  background-color: transparent;
  font-family: inherit;
}


.form-group input:focus {
    outline: none;
    border-color: var(--card-txt-gold);
}

.form-group textarea:focus {
    outline: none;
    border-color: var(--card-txt-gold);
}

.form-submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: end;
    margin-top: 2rem;
    color: #717171;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 2px;
    width: 9rem;
    height: 3rem;
    background: #313131;
    border: 1px solid grey;
    padding: 12px 16px;
    gap: 8px;
    cursor: pointer;
    border-radius: 30px;    
    transition: all 0.3s ease-out;
@media (max-width: 410px) {
    width: 6rem;
    height: 2rem;
    font-size: 0.7rem;
}
}

.form-submit-btn:hover {
    background: white;
    color: var(--card-txt-gold);
    border-color: var(--card-txt-gold);
    transition: all .3s ease-in;
}

`