import { sulfurasQuality } from '../items/constants.ts';

export class SulfurasRules {
  validateProperties({ quality }: { quality: number }): void {
    if (quality !== sulfurasQuality) {
      throw new Error(`Sulfuras quality is always ${sulfurasQuality}`);
    }
  }
}
