import proyectoFinal from './../public/documents/ProyectoFinal-ValentinaPaniza.pdf';

class SectionContent {
    constructor(name, description, date) {
      this.name = name;
      this.description = description;
      this.date = date;
    }
}

class Jobs extends SectionContent {
    constructor(name, description, date, company, location) {
        super(name, description, date);
        this.company = company;
        this.location = location;
    }
}

class Education extends SectionContent {
    constructor(name, description, date, institution, location) {
        super(name, description, date);
        this.institution = institution;
        this.location = location;
    }
}

class Skills {
    constructor(skill, proficiency) {
        this.skill = skill;
        this.proficiency = proficiency;
    }
}

class Projects {
    constructor(name, subtitle, description, externalLink, linkText){
        this.name = name;
        this.subtitle = subtitle;
        this.description = description;
        this.externalLink = externalLink;
        this.linkText = linkText;
    }
}

export const jobs = [
    new Jobs(
        'Software Developer',
        'Web UI developer using Javascript, React, HTML, CSS (SASS). Python & Front end developer for an internal collaborative project.',
        'Dec. 2020 - ongoing',
        'Globant',
        'Buenos Aires, Arg.'
    ),
    new Jobs(
        'Software Developer',
        'Software developer for hardware and embedded systems, mainly in C language',
        'Apr. 2019 - Oct. 2019',
        'Apexar Technologies S.A.',
        'Buenos Aires, Arg.'
    ),
    new Jobs(
        'Regulatory Affairs & Quality Assurance Intern',
        'Assistance to the Medical Technology Director: regulatory affairs (ANMAT, ENACOM, FDA, ISO); KPI following and analysis. Assistance to the Quality, Security and Risks Director.',
        'May 2018 - Apr. 2019',
        'Air Liquide',
        'Buenos Aires, Arg.'
    )    
];

export const education = [
    new Education (
        'Full Stack Web Development',
        'Scholarship granted by Globant. HTML5, CSS, JavaScript, Node.js, MySQL, Express & more',
        'Feb. 2020 - Sep. 2020',
        'Acamica / Globant',
        'Buenos Aires, Arg.'
    ),
    new Education (
        'Biomedical Engineering',
        'Degree - GPA: 7.5/10',
        'Feb. 2012 - Dec. 2018',
        'Instituto Tecnológico de Buenos Aires',
        'Buenos Aires, Arg.'
    ),
    new Education (
        'Biomedical Engineering',
        'Master exchange program',
        'Jan. 2017 - Jun. 2017',
        'Kungliga Tekniska Högskolan (KTH)',
        'Stockholm, Swe.'
    ),
    new Education (
        'Bilingual Bachelor',
        'Natural Science orientation - GPA: 8.8/10',
        'Mar. 2006 - Dec. 2011',
        'Southern Cross School',
        'Buenos Aires, Arg.'
    )
];

export const skillsTech = [
    new Skills('HTML5', 10),
    new Skills('CSS / SASS', 10),
    new Skills('Python', 8),
    new Skills('Javascript', 8),
    new Skills('React', 7),
    new Skills('GIT', 7),
    new Skills('NodeJS', 7),
    new Skills('C', 6),
    new Skills('Neural Networks', 6),
    new Skills('Image processing', 6),
    new Skills('Tensorflow', 5),
    new Skills('Scikit-learn', 5),
    new Skills('Pandas', 5),
    new Skills('Keras', 5),
    new Skills('MySQL', 5),
    new Skills('Express', 4),
    new Skills('AWS', 2),
];

export const skillsSoft = [
    new Skills('Agile Methodologies (SCRUM)'),
    new Skills('Responsive design'),
    new Skills('Mobile-first thinking'),
    new Skills('Spanish (native)'),
    new Skills('English (bilingual)'),
    new Skills('German (A2 level)'),
    new Skills('Adaptability'),
    new Skills('Team work'),
    new Skills('Eager to learn'),
    new Skills('Problem solving'),
    new Skills('Enthusiastic'),
    new Skills('Committed'),
];

export const projects = [
    new Projects("Convolutional Neural Networks for Alzheimer's diagnosis", "*Only available in Spanish", "For my master thesis, I have designed and tested multiple CNN's on brain MRI's in order to detect and predict Alzheimer's Disease.", proyectoFinal, "Read more"),
    new Projects("Pure HTML and CSS website", " ", "A pure HTML and CSS website for podcasts. Responsive design applying mobile-first thinking. There is no Javascript involved.", "https://vpaniza.github.io/pale-blue-dot/", "Go to website"),
    new Projects("Browse and create GIFs with this website", "*Desktop only", "An anachronic/retro-styled website built using only HTML, CSS and Vanilla JS. It is intended for browsing and creating GIFs.", "https://vpaniza.github.io/GifOS/","Go to website")
];



