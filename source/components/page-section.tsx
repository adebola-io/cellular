import { createElement } from '@/setup';

export const PageSection = createElement({
  tag: 'page-content',
  render: () => {
    return (
      <section class="min-h-screen w-screen font-serif flex flex-col items-start justify-end">
        <slot />
      </section>
    );
  },
});
