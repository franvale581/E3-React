import React from 'react'
import { ContactCards, ContactFormContainer, ContactSect, ContactTitle } from './contactStyled'

import { TfiInfo } from "react-icons/tfi";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiCheck } from "react-icons/tfi";

export const ContactSection = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //prevengo el evento que recarga la pagina al dar submit porque genera un error
    }
    return (
        <>

            <ContactSect>
                <ContactTitle>
                    <h2>¡Realizá tu pedido personalizado!</h2>
                </ContactTitle>
                <ContactCards>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <TfiInfo className='card-icon' />
                                <p class="card-title-front"></p>
                                <p class="card-info-front">Ver más</p>
                            </div>
                            <div class="flip-card-back">
                                <p class="card-title">PEDIDO PERSONALIZADO</p>
                                <p class="card-info">Debajo de estas instrucciones te encontraras con un formulario para rellenar y especificar los detalles del producto que se desea confeccionar. </p>
                            </div>
                        </div>
                    </div>

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <TfiLocationPin className='card-icon' />
                                <p class="card-title-front"></p>
                                <p class="card-info-front">Ver más</p>
                            </div>
                            <div class="flip-card-back">
                                <p class="card-title">TIEMPO DE ESPERA</p>
                                <p class="card-info">Una vez entregada la informacion Mateo se pondra en contacto para confirmar el pedido y empezar a trabajar en la prenda. El tiempo de demora de confeccion sera especificado antes de empezar.</p>
                            </div>
                        </div>
                    </div>

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <TfiCheck className='card-icon' />
                                <p class="card-title-front"></p>
                                <p class="card-info-front">Ver más</p>
                            </div>
                            <div class="flip-card-back">
                                <p class="card-title">ENVIOS</p>
                                <p class="card-info">Se realizan envios gratis al interior de Cordoba Capital, de no ser el caso se enviara por correa a contrapago.</p>
                            </div>
                        </div>
                    </div>
                </ContactCards>

                <ContactFormContainer>
                    <div class="form-container">
                        <form class="form" onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="name">Nombre Completo</label>
                                <input name="name" id="name" type="text" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input name="email" id="email" type="text" />
                            </div>
                            <div class="form-group">
                                <label for="cellphone">Teléfono</label>
                                <input name="cellphone" id="cellphone" type="text" />
                            </div>
                            <div class="form-group">
                                <label for="textarea">Especifica Tu Pedido</label>
                                <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
                            </div>
                            <button type="button" class="form-submit-btn">Enviar</button>
                        </form>
                    </div>    
                </ContactFormContainer>

            </ContactSect>

        </>
    )
}
