import { Article, UserRole } from './classes/article';
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Headers,
  HttpStatus,
  HttpException,
  ParseIntPipe,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ApiQuery, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Post()
  @ApiBody({ description: '创建文章' })
  create(@Body() createArticleDto: CreateArticleDto): string {
    return this.articleService.create(createArticleDto);
  }

  // 查询
  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'role', enum: UserRole })
  @ApiResponse({
    status: 200,
    description: 'get ...',
    type: Article,
  })
  fetch(@Query() { id }, @Headers('token') token): string {
    if (!id) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: '请求参数id 必传',
          error: 'id is required',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.articleService.fetch(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '请输入message' })
  update(@Param('id', new ParseIntPipe())  id , @Body() { message }): string {
    console.log(typeof id)
    return this.articleService.update(id, message);
  }

  // 删除
  @Delete()
  remove(@Query() { id }): string {
    return this.articleService.remove(id);
  }
}
