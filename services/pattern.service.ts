import { Patterns, pikachu } from "../mocks/patterns";

export class PatternService {
  async getPattern(id: string) {
    try {
      return Promise.resolve(Patterns);
    } catch (error) {}
  }
}
