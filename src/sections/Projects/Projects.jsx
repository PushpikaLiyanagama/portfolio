import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

import projectOne from '../../assets/project1.png';
import projectTwo from '../../assets/project2.png';
import projectThree from '../../assets/project3.png';
import projectFour from '../../assets/project4.png';
import projectFive from '../../assets/project5.png';
import projectSix from '../../assets/project6.png';
import projectSeven from '../../assets/project7.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={projectOne}
          link="https://github.com/PushpikaLiyanagama/comis-blog"
          h3="Comis Blog"
          // p="Blog Web App"
        />
        <ProjectCard
          src={projectTwo}
          link="https://github.com/PushpikaLiyanagama/weather-app"
          h3="Weather Reporter"
          // p="Weather Reporter app developed by using IOT and Machine Learning"
        />
        <ProjectCard
          src={projectThree}
          link="https://github.com/nisal-basura/Aurora"
          h3="Urban AI"
          //p="Glasses Shop"
        />
        <ProjectCard
          src={projectFour}
          link="https://github.com/PushpikaLiyanagama/e-commerce-mobile-shop"
          h3="Urban AI"
          //p="Glasses Shop"
        />
        <ProjectCard
          src={projectFive}
          link="https://github.com/PushpikaLiyanagama/Smart-MCQ-Assessment-System-"
          h3="Smart MCQ Application"
          //p="Fitness App"
        />
        <ProjectCard
          src={projectSix}
          link="https://github.com/PushpikaLiyanagama/DertDevil"
          h3="Clean Master Web"
          //p="Fitness App"
        />
        <ProjectCard
          src={projectSeven}
          link="https://pushpikaliyanagama.github.io/officialWebSite.github.io/"
          h3="NB CodeZone Web App"
          //p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
