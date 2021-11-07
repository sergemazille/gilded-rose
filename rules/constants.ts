import { AgedBrieRules } from './AgedBrieRules.ts';
import { RegularRules } from './RegularRules.ts';
import { SulfurasRules } from './SulfurasRules.ts';

export type ImmutableItemRules = SulfurasRules;
export type MutableItemRules = AgedBrieRules | RegularRules;
