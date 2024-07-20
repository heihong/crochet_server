import { PatternService } from "../services/pattern.service";

export class PatternController {
  async getPattern(req: any, res: any) {
    const patternService = new PatternService();
    let param = req.body;
    let result = await patternService.getPattern(param);
    res.set("Access-Control-Allow-Origin", "http://localhost:4200");
    res.send(result);
  }
}
