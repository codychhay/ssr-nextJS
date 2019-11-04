import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Server-Side-Render App</h1>
        <Link href='/about'>
            <button>About Page</button>
        </Link>    
    </div>
);

export default Index;