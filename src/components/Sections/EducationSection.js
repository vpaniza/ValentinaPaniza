import Education from '../Education/Education';
import styles from './EducationSection.module.scss';
import { Element } from 'react-scroll';

const EducationSection = () => {
    return (
        <>
            <Element id={'education'}>
                <div className={styles['sectionWrapper']}>
                    <Education />
                </div>
            </Element>
        </>
    )
};

export default EducationSection;