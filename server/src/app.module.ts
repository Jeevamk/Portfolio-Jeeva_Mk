import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module.js';
import { PortfolioModule } from './portfolio/portfolio.module.js';

@Module({
  imports: [PortfolioModule, ContactModule],
})
export class AppModule {}
