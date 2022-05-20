import Header from '../../../components/Header';
import ProjectBanner from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title="Project #1"
        img="https://www.minhaoperadora.com.br/wp-content/uploads/2019/08/Site-antigo-da-Vivo-1024x516.jpg"
        type="website"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          beatae, tempora consectetur eum in ea iure dolor aspernatur suscipit
          eligendi soluta earum cumque harum tempore saepe sit? Nihil,
          repudiandae voluptatum.
        </p>

        <button type="button">
          <a href="#">View Project</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
