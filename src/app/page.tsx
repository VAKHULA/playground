import { Link } from '@/components/link';
import { Article } from '@/components/article';

export default function HomePage() {
  return (
    <div>
      HomePage
      <Article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vitae repellendus porro, earum nobis sunt architecto cupiditate totam voluptatem tempora quo, quis iure culpa quos, tempore incidunt maxime. Veniam, sint!
      </Article>
      <p>
        <Link href="#">link</Link>, 
        <Link href="#" className="secondary">link</Link>, 
        <Link href="#" className="contrast">link</Link>
      </p>
      <p>

        <br />
      </p>
    </div>
  );
}
