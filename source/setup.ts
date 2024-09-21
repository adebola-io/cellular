import { setup, css } from "@adbl/bullet";
import sharedStyles from "./styles/shared.scss?inline";
import tailwindStyles from './styles/tailwind.scss?inline';


export const { createElement } = setup({
  namespace: "manic",
  styles: css([
    tailwindStyles,
    sharedStyles
  ])
});