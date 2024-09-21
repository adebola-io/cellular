import { createElement } from '@/setup';

export const Header = createElement({
  tag: 'app-header',
  render: () => {
    return (
      <header class="fixed top-0 w-full bg-green-300 left-0 h-5">
        Hello there.
      </header>
    );
  },
});
