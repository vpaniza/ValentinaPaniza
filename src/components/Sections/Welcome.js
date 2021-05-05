import Name from '../Name/Name';
import { Element } from 'react-scroll';
import { Link } from "react-scroll";
import Profession from '../Profession/Profession';
import styles from './Welcome.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
    return (
        <>
        <Element id='main'>
            <div className={styles['mainWrapper']} >
                <div className={styles['headerWrapper']}>
                    <div className={styles['image']} />
                    <div className={styles['text']}>
                        <Name name={'Valentina'} />
                        <Profession />
                    </div>
                    <div className={styles['iconWrapper']}>
                        <Link
                                to="about" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className={styles['scroll']}
                            >
                            <FontAwesomeIcon icon={faAngleDoubleDown} className={styles['icon']}></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
            </div>
        </Element>
        </>
    )
};

export default Welcome;