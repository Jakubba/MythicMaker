import { ICharacteristics } from './Characteristics';

export interface ICreateUserParams {
  email: string;
  password: string;
  profile: ICharacteristics;
}
