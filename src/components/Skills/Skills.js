import React from 'react';
import styles from './Skills.module.scss';
import {skillsTech, skillsSoft} from '../../data/data';

const Skills = () => {
    const proficiencyArrayCreator = (proficiency) => {
        const arrTen = new Array(10).fill(0);
        return arrTen.fill(1, 0, parseInt(proficiency))
    }

    return(
        <>
            <div className={styles['wrapper']}>
                <h4 className={styles['sectionTitle']}>
                    My Skills
                </h4>
                <div className={styles['skills']}>
                    <h5 className={styles['title']}>Technologies</h5>
                    <div className={styles['scoring']}>
                        {skillsTech.map(skill => (
                            <>
                                <p className={styles['name']}>{skill.skill}</p>
                                <div className={styles['proficiencyWrapper']}>
                                    {proficiencyArrayCreator(skill.proficiency).map(value => {
                                        if(value === 1 ){
                                            return(
                                                <div className={styles['filledCircle']} />
                                            )
                                        } else{
                                            return(
                                                <div className={styles['emptyCircle']} />
                                            )
                                        }
                                    })}
                                </div>
                            </>
                            ))
                        }
                    </div>
                </div>
                <div className={styles['skills']}>
                    <h5 className={styles['title-soft']}>Methodologies & Soft Skills</h5>
                    <div className={styles['soft']}>
                        {skillsSoft.map(skill => (
                            <>
                                <p className={styles['name']}>{skill.skill}</p>
                            </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;