import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service.js';
import { CreateMessageDto } from './dto/create-message.dto.js';

@Controller('contact')
export class ContactController {
  constructor(private readonly contact: ContactService) {}

  // POST /api/contact  { name, email, message }
  @Post()
  create(@Body() dto: CreateMessageDto) {
    return this.contact.save(dto);
  }
}
