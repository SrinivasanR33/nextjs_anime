
// pages/index.tsx
import React from 'react';
import FlipBox from './component/PageComponents/rootpage/RootPageHeaderBox';
import Footer from './component/Footer';


const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <FlipBox content={""} />
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
