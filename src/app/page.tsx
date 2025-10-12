import { Link } from '@/components/link';
import { Button } from '@/components/button';

export default function HomePage() {
  return (
    <div>
      HomePage
      <p>
        <Link href="#">link</Link>
      </p>
      <p>
        <Button onClick={() => {}}>Button</Button>
        <br />
        <Button className="secondary" onClick={() => {}}>
          Button
        </Button>
        <br />
        <Button className="contrast" onClick={() => {}}>
          Button
        </Button>
        <br />
      </p>
    </div>
  );
}
