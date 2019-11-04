import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
    <div>
        <h1>About Page</h1>
        <p>I was once a magician!</p>
        <Image/>
        <Link href='/'>
            <button>Home Page</button>
        </Link>
    </div>
);

export default About;