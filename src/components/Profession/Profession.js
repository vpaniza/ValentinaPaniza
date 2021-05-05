import React from 'react';
import styles from './Profession.module.scss';
import Typewriter from 'typewriter-effect';

const Profession = () => {
    const professions = [' Biomedical Engineer', ' FS Web Developer'];

    return(
        <>
            <h3 className={styles['profession']}>I am a<span> </span>
                <Typewriter 
                    options={{
                        strings: professions,
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                        pauseFor: 1200
                    }}
                />
            </h3>
        </>
    )
}

export default Profession;