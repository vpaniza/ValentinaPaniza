import WorkExperience from '../WorkExperience/WorkExperience';
import styles from './WorkSection.module.scss';
import { Element } from 'react-scroll';


const WorkSection = () => {
    return (
        <>
            <Element id='workExperience'>
                <div className={styles['sectionWrapper']}>
                    <WorkExperience />
                </div>
            </Element>
        </>
    )
};

export default WorkSection;