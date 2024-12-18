import './globals.css'; // Import global styles (optional)
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Clerk Authentication',
  description: 'Authentication using Clerk',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
