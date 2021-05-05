import React from 'react';
import styles from './WorkExperience.module.scss';
import {jobs} from '../../data/data';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

const WorkExperience = () => {
    return(
        <>
            <div className={styles['jobs']}>
                <h4 className={styles['sectionTitle']}>Work Experience</h4>
                <div className={styles['dataWrapper']}>
                {jobs.map((job,idx) => (
                    <div className={styles['data']}>
                        <p className={styles['name']}>{job.name}</p>
                        <p className={styles['description']}>{job.description}</p>
                        <div className={styles['details']}>
                            <div className={styles['iconWrapper']}>
                                <BusinessCenterOutlinedIcon />
                                <p className={styles['company']}>{job.company}</p>     
                            </div>
                            <div className={styles['iconWrapper']}>
                                <LocationOnOutlinedIcon />
                                <p className={styles['location']}>{job.location}</p>
                            </div>
                            <div className={styles['iconWrapper']}>
                                <EventOutlinedIcon />
                                <p className={styles['date']}>{job.date}</p>
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

export default WorkExperience;