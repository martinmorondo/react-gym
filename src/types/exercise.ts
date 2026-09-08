export type ExerciseDifficulty = 'beginner' | 'intermediate' | 'advanced';

export type Exercise = {
id: string;
name: string;
description: string;
muscleGroup: string;
equipment: string;
difficulty: ExerciseDifficulty;
image: string;
instructions: string[];
};
