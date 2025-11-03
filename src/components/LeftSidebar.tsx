import Link from 'next/link';

export default function LeftSidebar() {
  return (
    <nav style={{ minWidth: '200px', borderRight: '1px solid #eee', paddingRight: '20px' }}>
      <h4>サブメニューなのだ</h4>
      <ul>
        <li><Link href="#">サブリンク 1</Link></li>
        <li><Link href="#">サブリンク 2</Link></li>
        <li><Link href="#">サブリンク 3</Link></li>
      </ul>
    </nav>
  );
}
