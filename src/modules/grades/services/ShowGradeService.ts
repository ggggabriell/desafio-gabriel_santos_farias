import AppError from '@shared/errors/AppError';
import Grade, { IGrade } from '../../../models/Grade';

interface IRequest {
  value: string;
  method: string;
}

export default class ShowGradeService {
  public async execute({ value, method }: IRequest): Promise<IGrade[]> {
    let gradeList;

    if (method === 'period') {
      gradeList = await Grade.find({ bimestre: value });
    } else if (method === 'subject') {
      gradeList = await Grade.find({ disciplina: value });
    } else {
      gradeList = await Grade.find({});
    }

    if (!gradeList) {
      throw new AppError('Não foi possivel encontrar nenhum item.');
    }

    return gradeList;
  }
}
