import { Injectable, Logger } from '@nestjs/common';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { CreateMessageDto } from './dto/create-message.dto.js';

// Messages are saved to server/messages.json.
// To receive them by email instead, swap the file write for Nodemailer or Resend.
const FILE = join(process.cwd(), 'messages.json');

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  async save(dto: CreateMessageDto) {
    const entry = { ...dto, receivedAt: new Date().toISOString() };

    let messages: unknown[] = [];
    try {
      messages = JSON.parse(await fs.readFile(FILE, 'utf8'));
    } catch {
      // No file yet: start a new list
    }
    messages.push(entry);
    await fs.writeFile(FILE, JSON.stringify(messages, null, 2));

    this.logger.log(`New message from ${dto.name} <${dto.email}>`);
    return { ok: true, message: 'Message sent. I will reply by email soon.' };
  }
}
