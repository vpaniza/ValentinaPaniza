import React from 'react';
import styles from './AboutMe.module.scss';
import Image from '../Image/Image';
import img from './../../public/assets/china.jpg';
import { Element } from 'react-scroll';

const AboutMe = () => {
    return(
        <> 
        <Element id='about'>
            <div className={styles['wrapper']}>
                <div className={styles['imgWrapper']}>
                    <Image src={img} alt={'this'} className={styles['circle']}/>
                </div>
                <div className={styles['description']}>
                    <h4 className={styles['sectionTitle']}>
                        A bit about me
                    </h4>
                    <p className={styles['aboutMe']}>
                        I decided to study Biomedical Engineering as I have always leaned towards medical sciences and helping other 
                        people. However, along my career I discovered the programming world and found it fascinating. I therefore began
                        to learn web development, and since then, I have been working on that. But I also feel attracted to machine learning
                        and AI, and as my hunger for knowledge never ceases, I got involved on some projects and courses to enhance my expertise
                        on those fields. 
                        <br></br> 
                        <br></br> 
                        My main goal is to eventually merge both programming and medicine in order to create new solutions for 
                        health related problems. 
                    </p>
                </div>
            </div>
        </Element>
        </>
    )
}

export default AboutMe;;