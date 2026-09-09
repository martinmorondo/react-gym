import { useMemo, useState } from 'react';
import type { Exercise } from '../../../types/exercise';

type UseExerciseFiltersResult = {
searchTerm: string;
muscleGroup: string;
difficulty: string;
equipment: string;
filteredExercises: Exercise[];
setSearchTerm: (value: string) => void;
setMuscleGroup: (value: string) => void;
setDifficulty: (value: string) => void;
setEquipment: (value: string) => void;
clearFilters: () => void;
};

export function useExerciseFilters(
exercises: Exercise[]
): UseExerciseFiltersResult {
const [searchTerm, setSearchTerm] = useState('');
const [muscleGroup, setMuscleGroup] = useState('');
const [difficulty, setDifficulty] = useState('');
const [equipment, setEquipment] = useState('');

const filteredExercises = useMemo(() => {
const normalizedSearchTerm = searchTerm.trim().toLowerCase();

return exercises.filter((exercise) => {
  const matchesSearch =
    normalizedSearchTerm === '' ||
    exercise.name.toLowerCase().includes(normalizedSearchTerm);

  const matchesMuscleGroup =
    muscleGroup === '' || exercise.muscleGroup === muscleGroup;

  const matchesDifficulty =
    difficulty === '' || exercise.difficulty === difficulty;

  const matchesEquipment =
    equipment === '' || exercise.equipment === equipment;

  return (
    matchesSearch &&
    matchesMuscleGroup &&
    matchesDifficulty &&
    matchesEquipment
  );
});

}, [exercises, searchTerm, muscleGroup, difficulty, equipment]);

const clearFilters = () => {
setSearchTerm('');
setMuscleGroup('');
setDifficulty('');
setEquipment('');
};

return {
searchTerm,
muscleGroup,
difficulty,
equipment,
filteredExercises,
setSearchTerm,
setMuscleGroup,
setDifficulty,
setEquipment,
clearFilters,
};
}
