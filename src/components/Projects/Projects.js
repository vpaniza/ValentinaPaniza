import React from 'react';
import {projects} from '../../data/data';
import styles from './Projects.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import proyectoFinal from './../../public/documents/ProyectoFinal-ValentinaPaniza.pdf';

const Projects = () => {

    return(
        <>
        <div className={styles['projects']}>
            <h3 className={styles['sectionTitle']}>My work</h3>
            {projects?.map((project,idx) => (
                <div className={styles['wrapper']}>
                    <div className={styles['core']}>    
                        <h4 className={styles['projectTitle']} >{project.name}</h4>
                        {project.subtitle && <h5 className={styles['']}>{project.subtitle}</h5>}
                        <p className={styles['description']}>{project.description}</p>
                    </div>
                    {project.externalLink && 
                        <a 
                            className={styles['link']} 
                            href={project.externalLink} 
                            target='_blank'
                            rel="noreferrer"
                        >
                            <span>{project.linkText}</span>  
                            <FontAwesomeIcon icon={faAngleDoubleRight} className={styles['icon']}></FontAwesomeIcon>
                        </a>
                    }
                </div>
            ))}
        </div>
        </>
    )
}

export default Projects;