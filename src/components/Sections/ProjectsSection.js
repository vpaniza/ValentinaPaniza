import Projects from '../Projects/Projects';
import styles from './ProjectsSection.module.scss';
import { Element } from 'react-scroll';

const ProjectsSection = () => {
    return (
        <>
            <Element id={'projects'}>
                <div className={styles['sectionWrapper']}>
                    <Projects />
                </div>
            </Element>
        </>
    )
};

export default ProjectsSection;