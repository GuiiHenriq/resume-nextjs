import Link from 'next/link';
import { Container } from './styles';

interface ProjectItemProps {
  title: String;
  type: String;
  img: String;
  slug: String;
}

function ProjectItem({ title, type, img, slug }: ProjectItemProps) {
  return (
    <Container img={img}>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjectItem;
