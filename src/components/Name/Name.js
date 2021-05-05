import React from 'react';
import styles from './Name.module.scss';

const Name = ({name}) => {
    return(
        <>
            <h1 className={styles['name']}>
                Hello, I am {name}
            </h1>
        </>
    )
}

export default Name;