import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

// すべての投稿のスラッグ（ファイル名）を取得
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const mdFileNames = fileNames.filter((fileName) => fileName.endsWith('.md'));

  return mdFileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}

// 見出しの型定義
export type Heading = {
  level: number;
  text: string;
  slug: string;
};

// スラッグに基づいて投稿データを取得（TOCも抽出）
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8'); 

  // gray-matterでメタデータと本文をパース
  const { data: frontmatter, content } = matter(fileContents);

  // --- 右サイドバー用の見出し抽出ロジック (簡易版) ---
  const headingRegex = /^(#{1,6})\s(.+)$/gm;
  const headings: Heading[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].trim();
    const level = match[1].length;
    const slug = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');
    headings.push({ level, text, slug });
  }
  // ---

  return {
    frontmatter,
    content,
    headings,
  };
}
