import { getAllPostSlugs, getPostData } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import RightSidebar from '@/components/RightSidebar';
import PlotlyChartRenderer from '@/components/PlotlyChartRenderer'; 

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

const CustomCodeRenderer = ({
  node, // node は使ってないけど、propsから分離しておく
  className,
  children,
  ...props
}: {
  node?: any; // node の型は複雑なので 'any' でOK
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; // その他の props
}) => {
  const match = /language-(\w+)/.exec(className || '');
  const lang = match ? match[1] : '';

  if (lang === 'plotly') {
    // コードブロックの中身（JSON文字列）を取り出す
    console.log("Plotly パース1");
    const jsonString = String(children).replace(/\n$/, '');
    
    // ★ Plotly 用のコンポーネントに JSON 文字列を渡す
    return <PlotlyChartRenderer jsonString={jsonString} />;
  }

  // 2. それ以外のコードブロックの場合
  return (
    console.log("Plotly パースしない"),
    <code className={className} {...props}>
      {children}
    </code>
  );
};


export default async function PostPage({ params }: { params: { slug: string } }) {
  const page = await params;
  const { content, headings } = await getPostData(page.slug);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <article style={{ flex: '3' }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          
          // ★ 'code' タグの処理を上書き
          components={{
            code: CustomCodeRenderer,
          }}
        >
          {content || ''}
        </ReactMarkdown>
      </article>

      <RightSidebar headings={headings} />
    </div>
  );
}
