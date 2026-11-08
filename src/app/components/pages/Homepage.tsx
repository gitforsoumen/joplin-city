import { Hero } from '../Hero';
import { NewsCarousel } from '../NewsCarousel';
import { EventsSection } from '../EventsSection';
import { StatsSection } from '../StatsSection';
import { ServiceDirectory } from '../ServiceDirectory';
import { InteractiveMap } from '../InteractiveMap';
import { FeaturedProjects } from '../FeaturedProjects';
import { QuickAccessLinks } from '../QuickAccessLinks';

interface HomepageProps {
  onNavigate: (page: string) => void;
}

export function Homepage({ onNavigate }: HomepageProps) {
  return (
    <>
      <Hero />
      <QuickAccessLinks />
      <StatsSection onNavigate={onNavigate} />
      <NewsCarousel />
      <EventsSection onNavigate={onNavigate} />
      <ServiceDirectory onNavigate={onNavigate} />
      <InteractiveMap />
      <FeaturedProjects />
    </>
  );
}