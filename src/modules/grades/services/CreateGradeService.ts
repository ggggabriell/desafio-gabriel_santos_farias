import mongoose from 'mongoose';

import AppError from '@shared/errors/AppError';
import Grade, { IGrade } from '../../../models/Grade';

interface IRequest {
  subject: string;
  period: string;
  grade: number;
}

export default class CreateGradeService {
  public async execute({ subject, period, grade }: IRequest): Promise<IGrade> {
    const gradeExists = await Grade.find({
      disciplina: subject,
      bimestre: period,
    });

    if (gradeExists.length >= 1) {
      throw new AppError(
        'A nota desta disciplina ja foi adicionada neste bimestre',
      );
    }

    if (grade < 0 || grade > 10) {
      throw new AppError('A nota precisa ser maior que 0 e menor que 10');
    }

    const createdGrade = new Grade({
      disciplina: subject,
      bimestre: period,
      nota: grade,
    });

    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdGrade.save({ session: sess });
      await sess.commitTransaction();
    } catch (error) {
      throw new AppError('Error ');
    }

    return createdGrade;
  }
}
