import { poppins } from '@/fonts/Poppins';
import classNames from 'classnames';
import 'leaflet/dist/leaflet.css';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import '../common/assets/styles/globals.css';
import MapSection from '../common/layout/Map/MapSection';
import Navbar from '../common/layout/Navbar';
const Map = dynamic(() => import('../common/layout/Map'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          poppins.className,
          'flex items-stretch min-safe-h-screen'
        )}
      >
        <Navbar />
        <MapSection />
        {auth && auth}
      </body>
    </html>
  );
}
