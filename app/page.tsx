
// pages/index.tsx
import React from 'react';
import Footer from './component/Footer';
import FlipBox from './component/PageComponents/rootpage/headerBox/RootPageHeaderBox';
import CenterBox from './component/PageComponents/rootpage/centerBox/RootPageCenterBox';


const Home: React.FC = () => {
  return (
    <div className="max-h-screen flex-col overflow-auto">
      <FlipBox content={""} />
      <CenterBox />
      <Footer />
    </div>
  );
};

export default Home;
