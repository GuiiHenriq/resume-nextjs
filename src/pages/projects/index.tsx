import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectCard
          title="Project #1"
          type="website"
          img="https://www.minhaoperadora.com.br/wp-content/uploads/2019/08/Site-antigo-da-Vivo-1024x516.jpg"
          slug="teste-01"
        />

        <ProjectCard
          title="Project #2"
          type="website"
          img="https://www.minhaoperadora.com.br/wp-content/uploads/2019/08/Site-antigo-da-Vivo-1024x516.jpg"
          slug="teste-02"
        />

        <ProjectCard
          title="Project #3"
          type="website"
          img="https://www.minhaoperadora.com.br/wp-content/uploads/2019/08/Site-antigo-da-Vivo-1024x516.jpg"
          slug="teste-03"
        />

        <ProjectCard
          title="Project #4"
          type="website"
          img="https://www.minhaoperadora.com.br/wp-content/uploads/2019/08/Site-antigo-da-Vivo-1024x516.jpg"
          slug="teste-04"
        />
      </main>
    </ProjectsContainer>
  );
}
