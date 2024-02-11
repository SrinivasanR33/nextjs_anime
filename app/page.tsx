
// pages/index.tsx
import React from 'react';
import Footer from './component/Footer';
import FlipBox from './component/PageComponents/rootpage/headerBox/RootPageHeaderBox';
import CenterBox from './component/PageComponents/rootpage/centerBox/RootPageCenterBox';
import MiddleBox from './component/PageComponents/rootpage/middleBox/RootPageCenterBox1';
import { companyName, loacalImage } from './commen/CommenName';

const Home: React.FC = () => {
  return (
    <div className="max-h-screen flex-col overflow-auto">
      <FlipBox content={""} />
      {/* <MiddleBox /> */}
      <CenterBox
        title={`Welcome to ${companyName}!`}
        summary={`Step into a world of captivating visuals and immerse
                         yourself in the enchanting realm of anime with ${companyName}. We're your ultimate destination for discovering, 
                        downloading, and viewing a diverse range of anime-related images and videos.`} 
        imag={loacalImage.homePage.homeimage1}
                        />
      <Footer />
    </div>
  );
};

export default Home;
