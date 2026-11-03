import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty({ message: 'Enter your name.' })
  @MaxLength(80)
  name: string;

  @IsEmail({}, { message: 'Enter a valid email address.' })
  email: string;

  @IsString()
  @MinLength(10, { message: 'Write a message of at least 10 characters.' })
  @MaxLength(2000)
  message: string;
}
