import { Rules } from '../rules/Rules.ts';

export class ImmutableItem {
  quality: number;

  constructor(quality: number, public readonly name: string, private readonly rules: Rules) {
    this.rules.validateProperties({ quality });

    this.quality = quality;
  }
}
