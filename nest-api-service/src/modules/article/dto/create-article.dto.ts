import { IsString, IsNotEmpty } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  @ApiPropertyOptional({ description: '文章标题' })
  readonly title: string;
  @IsString()
  @ApiPropertyOptional({ description: '文章副标题' })
  readonly subTitle: string;
  @ApiPropertyOptional({ description: '文章写作状态' })
  readonly status: boolean;
  @IsNotEmpty()
  @IsString()
  @ApiPropertyOptional({ description: '文章内容' })
  readonly content: string;
}
