import mongoose from 'mongoose';

import AppError from '@shared/errors/AppError';
import Grade from '../../../models/Grade';

interface IRequest {
  id: string;
}

export default class DeleteGradeService {
  public async execute({ id }: IRequest): Promise<void> {
    const gradeExists = await Grade.findById(id);

    if (!gradeExists) {
      throw new AppError('Não encontrado');
    }

    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await gradeExists.remove({ session: sess });
      await sess.commitTransaction();
    } catch (error) {
      throw new AppError('Error ');
    }
  }
}
