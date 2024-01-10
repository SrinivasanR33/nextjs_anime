
// pages/index.tsx
import React from 'react';
import Footer from './component/Footer';
import FlipBox from './component/PageComponents/rootpage/headerBox/RootPageHeaderBox';
import CenterBox from './component/PageComponents/rootpage/centerBox/RootPageCenterBox';


const Home: React.FC = () => {
  return (
    <div className="max-h-screen overflow-auto">
      <FlipBox content={""} />
      <CenterBox />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
