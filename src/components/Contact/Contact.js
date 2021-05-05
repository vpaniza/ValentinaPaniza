import React from 'react';
import { Element } from 'react-scroll';
import ContactForm from './ContactForm';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen} from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = ({ clearFormFields, onShowSuccessMessage }) => {
    return(
        <>
        <Element id='contact' >
            <div className={styles['wrapper']}>
                <div className={styles['imageWrapper']} />
                <div className={styles['contact']}>
                    <h4 className={styles['sectionTitle']}>
                        Contact
                    </h4>
                    <ContactForm 
                        clearFormFields={clearFormFields}
                        onShowSuccessMessage={onShowSuccessMessage}
                    />
                    <div className={styles['media']}>
                        <a href="https://www.instagram.com/vpaniza/" target="_blank" rel="noreferrer">
                            <span>
                                <FontAwesomeIcon icon={faInstagram} className={styles['icon']}></FontAwesomeIcon>
                                {/* instagram.com/vpaniza */}
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/valentina-paniza-556290147/" target="_blank" rel="noreferrer">
                            <span>
                                <FontAwesomeIcon icon={faLinkedinIn} className={styles['icon']}></FontAwesomeIcon>
                                {/* linkedin.com/in/valentina-paniza-556290147 */}
                            </span>
                        </a>
                        <a href="mailto:valentinapaniza93@gmail.com" target="_blank" rel="noreferrer">
                            <span>
                                <FontAwesomeIcon icon={faEnvelopeOpen} className={styles['icon']} rel="noreferrer"></FontAwesomeIcon>
                                {/* valentinapaniza93@gmail.com */}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </Element>
        </>
    )
}

export default Contact;