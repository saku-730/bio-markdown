import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'mathmatical biology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
