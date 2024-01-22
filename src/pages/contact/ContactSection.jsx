import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ContactCards, ContactFormContainer, ContactSect, ContactTitle } from './contactStyled'

import { TfiInfo } from "react-icons/tfi";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiCheck } from "react-icons/tfi";
import { ModalContainer, ModalContent } from '../../components/Header/cartStyles';

export const ContactSection = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //prevengo el evento que recarga la pagina al dar submit porque genera un error
    }

    //usestates para el modal del form 
    const [isOpen, setIsOpen] = useState(false);

    // codigo para formik 
    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'El nombre debe tener al menos 3 letras').required('El nombre es requerido'),
        email: Yup.string().email('el Email ingresado no es válido').required('El email es requerido'),
        cellphone: Yup.string().min(10, 'El teléfono debe tener al menos 10 números').required('El teléfono es requerido'),
        textarea: Yup.string().required('Especifique su pedido'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            cellphone: '',
            textarea: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            setIsOpen(true);
            formik.resetForm();
        },
    });

    return (
        <>

            <ContactSect>
                <ContactTitle>
                    <h2>¡Realizá tu pedido personalizado!</h2>
                </ContactTitle>
                <ContactCards>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <TfiInfo className='card-icon' />
                                <p className="card-title-front"></p>
                                <p className="card-info-front">Ver más</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="card-title">PEDIDO PERSONALIZADO</p>
                                <p className="card-info">Debajo de estas instrucciones te encontraras con un formulario para rellenar y especificar los detalles del producto que se desea confeccionar. </p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <TfiLocationPin className='card-icon' />
                                <p className="card-title-front"></p>
                                <p className="card-info-front">Ver más</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="card-title">TIEMPO DE ESPERA</p>
                                <p className="card-info">Una vez entregada la informacion Mateo se pondra en contacto para confirmar el pedido y empezar a trabajar en la prenda. El tiempo de demora de confeccion sera especificado antes de empezar.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <TfiCheck className='card-icon' />
                                <p className="card-title-front"></p>
                                <p className="card-info-front">Ver más</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="card-title">ENVIOS</p>
                                <p className="card-info">Se realizan envios gratis al interior de Cordoba Capital, de no ser el caso se enviara por correo a contrapago.</p>
                            </div>
                        </div>
                    </div>
                </ContactCards>

                <ContactFormContainer>
                    <div className="form-container">
                        <form className="form" onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre Completo</label>
                                <input style={formik.touched.name && !formik.errors.name ? { borderColor: 'green' } : null} name="name" id="name" type="text" {...formik.getFieldProps('name')} />
                                {formik.touched.name && formik.errors.name ? <div style={{ color: 'red', fontSize: '10px', letterSpacing: ' 1px', fontWeight: '700', background: 'transparent' }}>{formik.errors.name}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input style={formik.touched.email && !formik.errors.email ? { borderColor: 'green' } : null} name="email" id="email" type="text" {...formik.getFieldProps('email')} />
                                {formik.touched.email && formik.errors.email ? <div style={{ color: 'red', fontSize: '10px', letterSpacing: ' 1px', fontWeight: '700', background: 'transparent' }}>{formik.errors.email}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="cellphone">Teléfono</label>
                                <input style={formik.touched.cellphone && !formik.errors.cellphone ? { borderColor: 'green', MozAppearance: 'textfield' } : { MozAppearance: 'textfield' }} name="cellphone" id="cellphone" type="number" {...formik.getFieldProps('cellphone')} />
                                {formik.touched.cellphone && formik.errors.cellphone ? <div style={{ color: 'red', fontSize: '10px', letterSpacing: ' 1px', fontWeight: '700', background: 'transparent' }}>{formik.errors.cellphone}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="textarea">Especifica Tu Pedido</label>
                                <textarea style={formik.touched.textarea && !formik.errors.textarea ? { borderColor: 'green' } : null} required="" cols="50" rows="10" id="textarea" name="textarea" {...formik.getFieldProps('textarea')}></textarea>
                                {formik.touched.textarea && formik.errors.textarea ? <div style={{ color: 'red', fontSize: '10px', letterSpacing: ' 1px', fontWeight: '700', background: 'transparent' }}>{formik.errors.textarea}</div> : null}
                            </div>
                            <button type="submit" className="form-submit-btn">Enviar</button>
                        </form>
                    </div>
                </ContactFormContainer>
                
                {/* modal */}
                <ModalContainer isOpen={isOpen}>
                    <ModalContent>
                        <p>Se enviaron exitosamente sus datos</p>
                        <div className="modal-btn-container">
                            <button className="modal-btn" onClick={() => setIsOpen(false)}>Cerrar</button>
                        </div>
                    </ModalContent>
                </ModalContainer>

            </ContactSect>

        </>
    )
}
