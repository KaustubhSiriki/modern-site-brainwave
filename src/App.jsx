import React, { Suspense, lazy } from 'react';

// Lazy load components
const ButtonGradient = lazy(() => import("./assets/svg/ButtonGradient"));
const Benefits = lazy(() => import("./components/Benefits"));
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Collaboration = lazy(() => import("./components/Collaboration"));
const Services = lazy(() => import("./components/Services"));
const Pricing = lazy(() => import("./components/Pricing"));
const Roadmap = lazy(() => import("./components/Roadmap"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </Suspense>
  );
};

export default App;
