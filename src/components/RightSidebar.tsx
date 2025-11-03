import type { Heading } from '@/lib/posts'; // (F)で定義した型

type Props = {
  headings: Heading[];
};

export default function RightSidebar({ headings }: Props) {
  if (headings.length === 0) {
    return <aside style={{ minWidth: '200px' }}>目次がないのだ</aside>;
  }

  return (
    <aside style={{ minWidth: '200px', borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
      <h4>このページの目次</h4>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {headings.map((heading) => (
          <li key={heading.slug} style={{ marginLeft: `${(heading.level - 1) * 12}px` }}>
            {/* (F) で作った slug へのアンカーリンク */}
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
