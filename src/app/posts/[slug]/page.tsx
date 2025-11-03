import { getAllPostSlugs, getPostData } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import RightSidebar from '@/components/RightSidebar';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  console.log("--- generateStaticParams が生成した slugs ---");
  console.log(slugs);
  return slugs;
}

// 2. ページコンポーネント
export default async function PostPage({ params }: { params: { slug: string } }) {
  console.log("--- ここまでセーフ---");
  const { content, headings } = await getPostData(params.slug);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* メインコンテンツ */}
      <article style={{ flex: '3' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {/* ★★★ 修正はここなのだ ★★★ */}
          {/* content が falsy (undefined, null, '') の場合に備えて '' を渡す */}
          {content || ''}
        </ReactMarkdown>
      </article>

      {/* 右サイドバー (TOC) */}
      <RightSidebar headings={headings} />
    </div>
  );
}
