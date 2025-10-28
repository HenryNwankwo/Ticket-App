import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToasterProvider from '../components/ToasterProvider';

export const metadata = {
  title: 'TicketApp',
  description: 'Ticket management App',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col'>
        <ToasterProvider />
        <Navbar />
        <main className='flex-1 bg-gray-50'>
          <div className='container-centered px-6 py-10'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
