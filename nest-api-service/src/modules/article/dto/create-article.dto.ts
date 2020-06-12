import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string; // 标题
  @IsString()
  readonly subTitle: string; // 副标题
  readonly status: string; // 写作状态
  readonly avatar: string; // 头像
  @IsNotEmpty()
  @IsString()
  readonly mainContent: string;
  @IsInt()
  readonly pageviews: number; // 浏览量
}
