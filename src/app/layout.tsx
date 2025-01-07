import "@/styles/globals.css";
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ivan - Landing Page",
  description: "Horizon Wing Landing Page",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>{children}</>);
}
