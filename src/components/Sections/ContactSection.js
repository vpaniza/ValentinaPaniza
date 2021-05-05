import Contact from '../Contact/Contact';
import styles from './ContactSection.module.scss'

const ContactSection = () => {
    return (
        <>
            <div className={styles['sectionWrapper']}>
                <Contact />
            </div>
        </>
    )
};

export default ContactSection;