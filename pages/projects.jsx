import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";
import { getProjects } from "./api/projects";

const ProjectsPage = ({ projects }) => {
    return (
        <>
            <h2>
                <a target="_blank" rel="noopener" className={styles.underline}>
                    Projects I've Built
                </a>
            </h2>
            <div className={styles.container}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
};

export async function getStaticProps() {
    const projects = getProjects();

    return {
        props: { title: "Projects", projects },
    };
}

export default ProjectsPage;
