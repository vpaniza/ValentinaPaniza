import Skills from '../Skills/Skills';
import styles from './SkillsSection.module.scss';
import { Element } from 'react-scroll';

const SkillsSection = () => {
    return (
        <>
            <Element id='skills' >
                <div className={styles['sectionWrapper']}>
                    <Skills />
                </div>
            </Element>
        </>
    )
};

export default SkillsSection;