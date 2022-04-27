import Link from 'next/link';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Latest projects" />

      <section>
        <ProjectItem title="Project 01" type="Website" slug="teste-01" img="https://www.minhaoperadora.com.br/wp-content/uploads/2019/08/Site-antigo-da-Vivo-1024x516.jpg" />
        <ProjectItem title="Project 02" type="Website" slug="teste-02" img="https://www.minhaoperadora.com.br/wp-content/uploads/2019/08/Site-antigo-da-Vivo-1024x516.jpg" />
        <ProjectItem title="Project 03" type="Website" slug="teste-03" img="https://www.minhaoperadora.com.br/wp-content/uploads/2019/08/Site-antigo-da-Vivo-1024x516.jpg" />
      </section>

      <button type="button">
        <Link href="/projects">
          <a>See All Projects</a>
        </Link>
      </button>
    </Container>
  );
};

export default Projects;
