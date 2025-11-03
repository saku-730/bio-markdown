import LeftSidebar from '@/components/LeftSidebar';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', padding: '20px', gap: '20px' }}>
      <LeftSidebar />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}
