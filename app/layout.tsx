import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: 'NutriAI - AI Nutrition Tracking',
  description: 'Track your nutrition with AI-powered food recognition',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
