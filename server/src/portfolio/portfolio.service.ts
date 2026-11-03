import { Injectable } from '@nestjs/common';
import { awards, education, experience, highlights, profile, skills } from '../data/portfolio.data.js';

@Injectable()
export class PortfolioService {
  getProfile() {
    return { ...profile, highlights, awards, education };
  }

  getExperience() {
    return experience;
  }

  getSkills() {
    return skills;
  }
}
