import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIAssistant from '../common/AIAssistant';

interface PageLayoutProps {
  children: React.ReactNode;
  withFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, withFooter = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      {withFooter && <Footer />}
      <AIAssistant />
    </div>
  );
};

export default PageLayout;