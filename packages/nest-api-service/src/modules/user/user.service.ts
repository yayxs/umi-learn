import { UserEntity } from './entity/user.entity';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Ires } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<Ires> {
    const limit = 10; // 每页显示的列表数量
    const page = 1; // 当前的页码
    // 1 .先去创建一个QueryBuilder
    const users = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.photos', 'photo')
      .skip(limit * (page - 1))
      .take(limit)
      .getManyAndCount(); // 联合查询
    // console.log(users); // 其中users [[],0 ] 数组第一项分页后的数据 数据第二项是所有数据的总数
    const res = {
      data: users[0],
      meta: {
        total: users[1],
        page,
        limit,
      },
    };
    return res;
  }

  // async create(user): Promise<UsersEntity[]> {
  //   const { name } = user;
  //   const u = await getRepository(UsersEntity).findOne({ where: { name } });
  //   //   .createQueryBuilder('users')
  //   //   .where('users.name = :name', { name });
  //   // const u = await qb.getOne();
  //   if (u) {
  //     throw new HttpException(
  //       {
  //         message: 'Input data validation failed',
  //         error: 'name must be unique.',
  //       },
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  //   return await this.usersRepository.save(user);
  // }

  findOne(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
