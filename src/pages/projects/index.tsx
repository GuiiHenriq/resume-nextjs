import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import { getPrismicClient } from '../../services/prismic';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  url: string;
  thumbnail: string;
}

interface ProjectProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        {projects.map(project => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            type={project.type}
            img={project.thumbnail}
            slug={project.slug}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projects')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    url: project.data.url.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
