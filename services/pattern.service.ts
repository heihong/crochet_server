import { pikachu } from "../mocks/pikachu";

export class PatternService {
  async getPattern(id: string) {
    try {
      return Promise.resolve(pikachu);
    } catch (error) {}
  }
}
