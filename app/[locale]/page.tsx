import { Hero } from '@/components/sections/Hero';
import { Practice } from '@/components/sections/Practice';
import { PilotsIndex } from '@/components/sections/PilotsIndex';
import { Method } from '@/components/sections/Method';
import { Initiatives } from '@/components/sections/Initiatives';
import { CollaboratorsMarquee } from '@/components/sections/CollaboratorsMarquee';
import { Cta } from '@/components/sections/Cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Practice />
      <PilotsIndex />
      <Method />
      <Initiatives />
      <CollaboratorsMarquee />
      <Cta />
    </>
  );
}
