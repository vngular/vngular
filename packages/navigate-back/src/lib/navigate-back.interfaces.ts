export class VngNavigateBackConfig {}

export interface VngNavigateBackParms {
  fallbackNavigate?: string;
  fallbackNavigateByUrl?: string;
  fallbackClick?: () => void;
}

export type VngNavigateBackFallback = () => void;
