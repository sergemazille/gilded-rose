import { AgedBrieRules } from './AgedBrieRules.ts';
import { RegularItemRules } from './RegularItemRules.ts';
import { SulfurasRules } from './SulfurasRules.ts';

export type ImmutableItemRules = SulfurasRules;
export type MutableItemRules = AgedBrieRules | RegularItemRules;
