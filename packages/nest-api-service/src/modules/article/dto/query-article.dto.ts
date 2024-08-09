import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class QueryArticleDto {
  @IsNumber()
  @ApiPropertyOptional({ description: '每页x条' })
  readonly pageSize: number;
  @IsNumber()
  @ApiPropertyOptional({ description: '当前页' })
  readonly currentPage: number;
  @IsString()
  @ApiPropertyOptional({ description: '关键词' })
  readonly keywords: string;
}
