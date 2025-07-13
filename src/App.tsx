import { useEffect, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import LazySection from './components/LazySection';

// Lazy load heavy components
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    document.title = 'Santiago Juarez - Full Stack Developer';
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main>
            <Hero />
            <AboutMe />
            <LazySection
              fallback={
                <section className="py-20 bg-gray-800/90 backdrop-blur-sm">
                  <div className="container mx-auto px-4">
                    <div className="animate-pulse">
                      <div className="h-10 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
                      <div className="h-4 bg-gray-700 rounded w-64 mx-auto mb-12"></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-gray-700 rounded-lg h-64"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              }
            >
              <Projects />
            </LazySection>
            <LazySection
              fallback={
                <section className="py-20 bg-gray-900/90 backdrop-blur-sm">
                  <div className="container mx-auto px-4">
                    <div className="animate-pulse">
                      <div className="h-10 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
                      <div className="h-4 bg-gray-700 rounded w-64 mx-auto mb-12"></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <div className="h-12 bg-gray-700 rounded"></div>
                          <div className="h-12 bg-gray-700 rounded"></div>
                          <div className="h-32 bg-gray-700 rounded"></div>
                        </div>
                        <div className="bg-gray-700 rounded-lg h-64"></div>
                      </div>
                    </div>
                  </div>
                </section>
              }
            >
              <Contact />
            </LazySection>
          </main>
          <LazySection
            fallback={
              <footer className="py-8 bg-gray-900">
                <div className="container mx-auto px-4">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-700 rounded w-32 mx-auto"></div>
                  </div>
                </div>
              </footer>
            }
          >
            <Footer />
          </LazySection>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;