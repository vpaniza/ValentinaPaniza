import React from 'react';
import styles from './Education.module.scss';
import {education} from '../../data/data';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

const Education = () => {
    return(
        <>
            <div className={styles['education']}>
                <h4 className={styles['sectionTitle']}>
                    Education & Training
                </h4>
                <div className={styles['dataWrapper']}>
                    {education.map(item => (
                        <div className={styles['data']}>
                            <p className={styles['name']}>{item.name}</p>
                            <p className={styles['description']}>{item.description}</p>
                            <div className={styles['details']}>
                                <div className={styles['iconWrapper']}>
                                    <SchoolOutlinedIcon />
                                    <p className={styles['institution']}>{item.institution}</p>     
                                </div>
                                <div className={styles['iconWrapper']}>
                                    <LocationOnOutlinedIcon />
                                    <p className={styles['location']}>{item.location}</p>
                                </div>
                                <div className={styles['iconWrapper']}>
                                    <EventOutlinedIcon />
                                    <p className={styles['date']}>{item.date}</p>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Education;