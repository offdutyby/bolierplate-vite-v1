// import type { CSSProp } from "styled-components";
// import type { Theme } from "";

import { Theme } from "../styles/GlobalTheme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
