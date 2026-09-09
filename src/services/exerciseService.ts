import type { Exercise } from '../types/exercise';
import { exercises } from '../data/exercises';

export const exerciseService = {
async getAll(): Promise<Exercise[]> {
return exercises;
},

async getById(id: string): Promise<Exercise | undefined> {
return exercises.find((exercise) => exercise.id === id);
},
};
