import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', gap: '20px', fontSize: '1.2rem' }}>
        <Link href="/">Top</Link>
        <Link href="/posts/first-post">記事1</Link>
      </nav>
    </header>
  );
}
