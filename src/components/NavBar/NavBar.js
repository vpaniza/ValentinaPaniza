import React from 'react';
import {useState} from 'react';
import { Link } from "react-scroll";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import styles from './NavBar.module.scss';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    const closeMobileMenu = () => setIsOpen(false);

    return (
        <>
            <div className={`${styles['navBar']} ${isOpen && styles['openNav']} `}>
                <div className={styles['menuIcon']} onClick={handleClick}>
                    {!isOpen ?
                        <MenuOutlinedIcon 
                            className={styles['open']}
                        />
                        :
                        <CloseOutlinedIcon 
                            className={styles['close']}
                        />
                    }
                </div>
                <ul className={isOpen ? styles['menuWrapperOpen'] : styles['menuWrapper']}>
                    <li onClick={closeMobileMenu}>
                        <Link
                            to="main" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={styles['scroll']}
                        >
                            Home
                        </Link> 
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={styles['scroll']}
                        >
                            About
                        </Link> 
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link
                            to="skills" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={styles['scroll']}
                            >
                            Skills
                        </Link> 
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link
                            to="workExperience" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={styles['scroll']} 
                        >
                            Work Experience
                        </Link> 
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link
                            to="education" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={styles['scroll']}
                            >    
                            Education
                        </Link> 
                    </li>
                    <li onClick={e => setIsOpen(false)}>
                        <Link
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={styles['scroll']}
                        >    
                            My work
                        </Link> 
                    </li>
                    <li onClick={closeMobileMenu}>
                        <Link
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className={styles['scroll']}
                        >    
                            Contact
                        </Link> 
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;