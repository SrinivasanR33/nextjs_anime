
// pages/index.tsx
import React from 'react';
import FlipBox from './component/PageComponents/rootpage/RootPageHeaderBox';
import Footer from './component/Footer';


const Home: React.FC = () => {
  return (
    <div className="max-h-screen overflow-auto">
      <FlipBox content={""} />
      <div className=''>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
