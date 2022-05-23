import { GetStaticProps, GetStaticPaths } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../../components/Header';
import ProjectBanner from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyles';
import { getPrismicClient } from '../../../services/prismic';
import LoadingScreen from '../../../components/LoadingScreen';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  url: string;
  thumbnail: string;
}

interface ProjetcProps {
  project: IProject;
}

export default function Project({ project }: ProjetcProps) {
  const router = useRouter;

  if (router.isFallback) return <LoadingScreen />;

  return (
    <ProjectContainer>
      <Head>
        <title>{project.title} - Resume NextJS</title>

        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>

      <Header />
      <ProjectBanner
        title={project.title}
        img={project.thumbnail}
        type={project.type}
      />

      <main>
        <p>{project.description}</p>

        <button type="button">
          <a href={project.url}>View Project</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'projects')
  ]);

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projects', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    url: response.data.url.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
