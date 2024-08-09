import { UserEntity } from "../entity/user.entity";

export interface Ires {
    data: UserEntity[];
    meta: {
      total: number;
      page: number;
      limit: number;
    };
  }
  