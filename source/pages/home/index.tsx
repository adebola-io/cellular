import { Button, ButtonRow } from '@/components/button';
import { PageSection } from '@/components/page-section';
import BackgroundImage from '@/images/backgrounds/home-page.jpeg';
import { createElement } from '@/setup';

export default createElement({
  tag: 'home-view',

  render: () => {
    return (
      <>
        <img
          class="fixed top-0 object-cover w-full left-0 z-[-1] opacity-[0.6]"
          src={BackgroundImage}
          alt="A circular pattern of thin, black lines on a white background, resembling a fingerprint. The lines radiate outwards from the center, creating a swirling effect."
        />
        <main class="mr-auto p-8 text-left ">
          <PageSection attr:class="fixed top-0 left-0 bg-gradient-to-tr px-[2vw] from-white from-50% to-transparent">
            <h1 class="max-w-4xl text-left text-zinc-800 text-8xl text-balance font-bold py-7 bg-clip-text">
              evolve beyond nature's limits<span class="text-green-500">.</span>
            </h1>
            <p class="text-balance text-left min-w-full mr-auto ml-0">
              <div class="max-w-3xl mr-auto">
                Cellular is a bio-engineering startup focused on preserving and
                enhancing human life. We push the boundaries of medicine and
                biotechnology through innovations in cellular regeneration, gene
                therapy, and personalized treatments, aiming to extend longevity
                and improve quality of life for all.
              </div>
            </p>
            <ButtonRow attr:class="block mt-7 w-fit mb-10">
              <Button linkTo="/get-started" type="button">
                Get Started.
              </Button>
              <Button variant="outline" linkTo="/about" type="button">
                Learn More.
              </Button>
            </ButtonRow>
          </PageSection>
        </main>
      </>
    );
  },
});
