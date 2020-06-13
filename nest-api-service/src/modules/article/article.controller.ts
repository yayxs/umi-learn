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
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import {
  ApiQuery,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleEntity } from './entity/article.entity';

@Controller('article')
@ApiTags('文章')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @ApiOperation({ summary: '显示文章列表' })
  @Get()
  async fetch(@Query() { skip, take, keywords }): Promise<ArticleEntity[]> {
    return await this.articleService.fetch(skip, take, keywords);
  }

  @Post()
  @ApiOperation({ summary: '创建文章' })
  async create(@Body() createArticleDto: CreateArticleDto): Promise<any> {
    return await this.articleService.create(createArticleDto);
  }
  // @Get(':id')
  // detail(@Param('id') id: string): any {
  //   return {
  //     id: '1',
  //     title: 'haha ',
  //   };
  // }
  // @Put(':id')
  // @ApiParam({ name: 'id' })
  // @ApiBody({ description: '请输入message' })
  // update(@Param('id', new ParseIntPipe()) id, @Body() body:): string {
  //   console.log(typeof id);
  //   return this.articleService.update(id, message);
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: '删除一篇文章' })
  // async remove(@Param('id') id :string): string {
  //   return {
  //     success:true
  //   }
  // }
}
