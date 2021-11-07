import { ImmutableItemProperties } from '../items/constants.ts';
import { Rules } from '../rules/Rules.ts';

export class ImmutableItem {
  quality: number;

  private constructor(quality: number, public readonly name: string, private readonly rules: Rules) {
    this.rules.validateProperties({ quality });

    this.quality = quality;
  }

  static fromProperties(properties: ImmutableItemProperties) {
    const { quality, name, rules } = properties;

    return new ImmutableItem(quality, name, rules);
  }
}
