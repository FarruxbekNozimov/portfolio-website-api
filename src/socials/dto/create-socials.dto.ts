import { ApiProperty } from '@nestjs/swagger';

export class CreateSocialsDto {
  @ApiProperty({ example: 'Github' })
  name: string;

  @ApiProperty({ example: 'https://github.com/FarruxbekNozimov' })
  link: string;

  @ApiProperty({ example: 'bx bxl-github' })
  icon: string;
}
