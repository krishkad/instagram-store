
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import ReviewsSection from '@/components/ReviewsSection';
import InstagramFeed from '@/components/InstagramFeed';
import OnboardingSection from '@/components/OnboardingSection';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';

const Home = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedProducts />
        <CategorySection />
        <OnboardingSection />
        <ReviewsSection />
        <InstagramFeed />
      </main>
      {/* <Footer /> */}
     
    </div>
  );
};

export default Home;