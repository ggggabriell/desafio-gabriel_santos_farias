import mongoose from 'mongoose';

export interface IGrade extends mongoose.Document {
  disciplina: string;
  bimestre: string;
  nota: number;
}

export const GradeSchema = new mongoose.Schema(
  {
    disciplina: { type: String, required: true },
    bimestre: { type: String, required: true },
    nota: { type: Number, required: true },
  },
  { timestamps: true },
);

const Grade = mongoose.model<IGrade>('Grade', GradeSchema);

export default Grade;
