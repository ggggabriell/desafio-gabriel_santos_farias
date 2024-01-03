import { Request, Response } from 'express';

import CreateGradeService from '../services/CreateGradeService';
import ShowGradeService from '../services/ShowGradeService';
import DeleteGradeService from '../services/DeleteGradeService';
import UpdateGradeService from '../services/UpdateGradeService';

export default class GradesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { subject, period, grade } = request.body;

    const createGrade = new CreateGradeService();

    const createdGrade = await createGrade.execute({ subject, period, grade });

    return response.json(createdGrade);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { value, method } = request.body;

    const showGrade = new ShowGradeService();

    const grades = await showGrade.execute({ value, method });

    return response.json(grades);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteGrade = new DeleteGradeService();

    await deleteGrade.execute({ id });

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, subject, period, grade } = request.body;

    const updateGrade = new UpdateGradeService();

    const updatedGrade = await updateGrade.execute({
      id,
      subject,
      period,
      grade,
    });

    return response.json(updatedGrade);
  }
}
