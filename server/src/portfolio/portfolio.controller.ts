import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service.js';

@Controller()
export class PortfolioController {
  constructor(private readonly portfolio: PortfolioService) {}

  // GET /api/profile  → profile, highlights, awards, education
  @Get('profile')
  getProfile() {
    return this.portfolio.getProfile();
  }

  // GET /api/experience  → jobs and their projects
  @Get('experience')
  getExperience() {
    return this.portfolio.getExperience();
  }

  // GET /api/skills  → grouped skills
  @Get('skills')
  getSkills() {
    return this.portfolio.getSkills();
  }
}
