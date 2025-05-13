import React from 'react';
import Header from '../components/Header';
import FloatingButton from '../components/FloatingButton';
import ImageCarousel from '../components/ImageCarousel';
import SocialButton from '../components/SocialButton';

const Index = () => {
  const leaderboardImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png"
  ];

  return (
    <div className="min-h-screen bg-unite-black text-white overflow-x-hidden">
      <Header />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-28">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-unite-orange">hometext</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">descriptiontext</p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 section-padding bg-unite-darkGray">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">About Us</h2>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="section-subheading text-center">Who are we</h3>
            <p className="text-lg mb-12">storytext</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <SocialButton platform="whatsapp" link="link.com" label="WhatsApp" />
              <SocialButton platform="discord" link="link.com" label="Discord" />
              <SocialButton platform="youtube" link="link.com" label="YouTube" />
              <SocialButton platform="instagram" link="link.com" label="Instagram" />
              <SocialButton platform="github" link="link.com" label="GitHub" />
            </div>
            
            {/* Space for additional content */}
            <div className="min-h-[100px]"></div>
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="py-20 section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Our Tournaments</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Tournament Card */}
            <div className="card hover-scale flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-3 text-left">
                <h3 className="text-2xl font-bold text-unite-orange">bcname</h3>
                <p className="text-gray-400">datetext</p>
                <p className="max-w-xl">descriptiontext</p>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>

            <h3 className="section-subheading text-center mt-12">Other Tournaments</h3>
            
            {/* Other Tournament Card */}
            <div className="card hover-scale flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-3 text-left">
                <h3 className="text-2xl font-bold text-unite-orange">bcname</h3>
                <p className="text-gray-400">datetext</p>
                <p className="max-w-xl">descriptiontext</p>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-20 section-padding bg-unite-darkGray">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Leaderboard</h2>
          <p className="text-lg max-w-3xl mx-auto text-center mb-12">descriptiontext</p>
          
          <ImageCarousel images={leaderboardImages} />
        </div>
      </section>

      {/* Archives Section */}
      <section id="archives" className="py-20 section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Archives</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Archive Card */}
            <div className="card hover-scale flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-3 text-left">
                <h3 className="text-2xl font-bold text-unite-orange">mctext</h3>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="btn btn-outline">View</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-padding bg-unite-darkGray">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Contact Us</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Contact Card */}
            <div className="card hover-scale flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-left">
                <h3 className="text-2xl font-bold text-white">Mrinmoy Malik</h3>
                <p className="text-gray-400">Community Admin</p>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <SocialButton platform="linkedin" link="link.com" />
                <SocialButton platform="instagram" link="link.com" />
              </div>
            </div>

            <h3 className="section-subheading text-center mt-12">Other Platforms</h3>
            
            {/* Other Contact Card */}
            <div className="card hover-scale flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-left">
                <h3 className="text-2xl font-bold text-white">Swayam Chakraborty</h3>
                <p className="text-gray-400">Pokemon Go WB</p>
              </div>
              <div className="mt-4 md:mt-0">
                <SocialButton platform="whatsapp" link="link.com" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingButton />
    </div>
  );
};

export default Index;
