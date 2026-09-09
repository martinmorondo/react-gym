import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../../hooks/useDebounce';
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
const [searchParams, setSearchParams] = useSearchParams();

const [searchTerm, setSearchTermState] = useState(
() => searchParams.get('search') ?? ''
);

const muscleGroup = searchParams.get('muscleGroup') ?? '';
const difficulty = searchParams.get('difficulty') ?? '';
const equipment = searchParams.get('equipment') ?? '';

const debouncedSearchTerm = useDebounce(searchTerm, 300);

useEffect(() => {
const currentSearch = searchParams.get('search') ?? '';

if (debouncedSearchTerm === currentSearch) {
  return;
}

const nextParams = new URLSearchParams(searchParams);

if (debouncedSearchTerm) {
  nextParams.set('search', debouncedSearchTerm);
} else {
  nextParams.delete('search');
}

setSearchParams(nextParams, { replace: true });

}, [debouncedSearchTerm, searchParams, setSearchParams]);

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

const updateFilter = (key: string, value: string) => {
if (key === 'search') {
setSearchTermState(value);
return;
}

const nextParams = new URLSearchParams(searchParams);

if (value) {
  nextParams.set(key, value);
} else {
  nextParams.delete(key);
}

setSearchParams(nextParams);
};

const clearFilters = () => {
setSearchTermState('');
setSearchParams({});
};

return {
searchTerm,
muscleGroup,
difficulty,
equipment,
filteredExercises,
setSearchTerm: (value) => updateFilter('search', value),
setMuscleGroup: (value) => updateFilter('muscleGroup', value),
setDifficulty: (value) => updateFilter('difficulty', value),
setEquipment: (value) => updateFilter('equipment', value),
clearFilters,
};
}
