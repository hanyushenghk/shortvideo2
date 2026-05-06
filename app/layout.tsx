import type { Metadata } from 'next';
import './globals.css';
import { GameProvider } from '@/context/GameContext';

export const metadata: Metadata = {
  title: 'Shadow Video 2',
  description: 'Turn long videos into concise documents, mind maps, and short videos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
