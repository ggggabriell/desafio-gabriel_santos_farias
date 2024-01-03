import { Router } from 'express';

import gradesRouter from '@modules/grades/routes/grades.routes';

const routes = Router();

routes.use('/grades', gradesRouter);

export default routes;
