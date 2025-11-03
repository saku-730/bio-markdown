import LeftSidebar from '@/components/LeftSidebar';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // このレイアウトは /posts/* 以下のページに適用されるのだ
  return (
    <div style={{ display: 'flex', padding: '20px', gap: '20px' }}>
      <LeftSidebar />
      {/* ↓ ここに [slug]/page.tsx の中身が入るのだ */}
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}
