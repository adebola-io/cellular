import { createElement } from '@/setup';
import { useRouter } from '@adbl/bullet';

type ButtonAttributes = JSX.IntrinsicElements['button'];
interface ButtonProps extends ButtonAttributes {
  linkTo?: string;
  variant?: 'outline' | 'solid';
}

export const Button = createElement<ButtonProps>({
  tag: 'app-button',
  defaultProps: {
    variant: 'solid',
  },
  render: (props) => {
    if (props.linkTo) {
      const { Link } = useRouter();
      return (
        <Link to={props.linkTo}>
          <button
            {...props}
            class={[
              'px-10 py-3 rounded-xl font-bold border-solid border-4 border-zinc-800 hover:border-green-500 transition-colors duration-300',
              props.variant === 'solid' &&
                'bg-zinc-800 text-white hover:text-green-500',
              props.variant === 'outline' &&
                'bg-transparent text-zinc-800 hover:text-green-500',
              props.class,
            ]}
          >
            <slot />
          </button>
        </Link>
      );
    }

    return (
      <button
        {...props}
        class={['bg-zinc-800 text-white px-10 py-3 rounded-xl', props.class]}
      >
        <slot />
      </button>
    );
  },
});

export const ButtonRow = createElement({
  tag: 'app-button-row',
  render: () => {
    return (
      <div class="flex justify-center gap-4">
        <slot />
      </div>
    );
  },
});
