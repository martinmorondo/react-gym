export type ExerciseDifficulty =
  | 'beginner'
  | 'intermediate'
  | 'advanced';

export type ExerciseMuscleGroup =
  | 'Pecho'
  | 'Espalda'
  | 'Piernas'
  | 'Hombros'
  | 'Bíceps'
  | 'Tríceps'
  | 'Core';

export type ExerciseEquipment =
  | 'Barra'
  | 'Mancuernas'
  | 'Peso corporal'
  | 'Kettlebell'
  | 'Máquina'
  | 'Barra de dominadas';

export type Exercise = {
  id: string;
  name: string;
  description: string;
  muscleGroup: ExerciseMuscleGroup;
  equipment: ExerciseEquipment;
  difficulty: ExerciseDifficulty;
  image: string;
  instructions: string[];
};
