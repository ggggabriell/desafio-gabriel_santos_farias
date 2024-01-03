import { Router } from 'express';
import GradesController from '../controllers/GradesController';

const gradesRouter = Router();
const gradesController = new GradesController();

gradesRouter.get('/', gradesController.show);
gradesRouter.post('/', gradesController.create);
gradesRouter.put('/', gradesController.update);
gradesRouter.delete('/', gradesController.delete);

export default gradesRouter;
