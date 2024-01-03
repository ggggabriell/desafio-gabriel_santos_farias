import mongoose from 'mongoose';

import AppError from '@shared/errors/AppError';
import Grade, { IGrade } from '../../../models/Grade';

interface IRequest {
  id: string;
  subject: string;
  period: string;
  grade: number;
}

export default class UpdateGradeService {
  public async execute({
    id,
    subject,
    period,
    grade,
  }: IRequest): Promise<IGrade> {
    const updatedGrade = await Grade.findById(id);

    if (!updatedGrade) {
      throw new AppError('Não encontrado');
    }

    if (grade < 0 || grade > 10) {
      throw new AppError('A nota precisa ser maior que 0 e menor que 10');
    }

    const verifyGradeExists = await Grade.find({
      disciplina: subject,
      bimestre: period,
    });

    if (verifyGradeExists[0]) {
      throw new AppError('Essa disciplina nesse bimestre ja existe');
    }

    updatedGrade.nota = grade;
    updatedGrade.bimestre = period;
    updatedGrade.disciplina = subject;

    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await updatedGrade.save({ session: sess });
      await sess.commitTransaction();
    } catch (error) {
      throw new AppError('Error ');
    }

    return updatedGrade;
  }
}
