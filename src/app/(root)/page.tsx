
import AboutSection from '@/components/AboutSection';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import HeroSection from '@/components/HeroSection';
import InstagramFeed from '@/components/InstagramFeed';
import OnboardingSection from '@/components/OnboardingSection';
import ReviewsSection from '@/components/ReviewsSection';

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