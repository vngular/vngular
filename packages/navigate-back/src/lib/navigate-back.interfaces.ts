export class VngNavigateBackConfig {}

export type VngNavigateBackParms =
  | string
  | (string | number)[]
  | (() => unknown);

export type VngNavigateBackFallback = () => void;
