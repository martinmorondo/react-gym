import type {
  ExerciseDifficulty,
  ExerciseEquipment,
  ExerciseMuscleGroup,
} from '../types/exercise';

export const MUSCLE_GROUPS: ExerciseMuscleGroup[] = [
  'Pecho',
  'Espalda',
  'Piernas',
  'Hombros',
  'Bíceps',
  'Tríceps',
  'Core',
];

export const DIFFICULTIES: ExerciseDifficulty[] = [
  'beginner',
  'intermediate',
  'advanced',
];

export const EQUIPMENT_OPTIONS: ExerciseEquipment[] = [
  'Barra',
  'Mancuernas',
  'Peso corporal',
  'Kettlebell',
  'Máquina',
  'Barra de dominadas',
];
