import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../../hooks/useDebounce';
import type { Exercise } from '../../../types/exercise';

type UseExerciseFiltersResult = {
searchTerm: string;
muscleGroup: string;
difficulty: string;
equipment: string;
favoritesOnly: boolean;
filteredExercises: Exercise[];
setSearchTerm: (value: string) => void;
setMuscleGroup: (value: string) => void;
setDifficulty: (value: string) => void;
setEquipment: (value: string) => void;
setFavoritesOnly: (value: boolean) => void;
clearFilters: () => void;
};

type FavoriteChecker = (exerciseId: string) => boolean;

export function useExerciseFilters(
exercises: Exercise[],
isFavorite: FavoriteChecker
): UseExerciseFiltersResult {
const [searchParams, setSearchParams] = useSearchParams();

const [searchTerm, setSearchTermState] = useState(
() => searchParams.get('search') ?? ''
);

const muscleGroup = searchParams.get('muscleGroup') ?? '';
const difficulty = searchParams.get('difficulty') ?? '';
const equipment = searchParams.get('equipment') ?? '';
const favoritesOnly = searchParams.get('favorites') === 'true';

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
  const searchableText = [
  exercise.name,
  exercise.description,
  exercise.muscleGroup,
  exercise.equipment,
].join(' ').toLowerCase();

const matchesSearch =
  normalizedSearchTerm === '' ||
  searchableText.includes(normalizedSearchTerm);

  const matchesMuscleGroup =
    muscleGroup === '' || exercise.muscleGroup === muscleGroup;

  const matchesDifficulty =
    difficulty === '' || exercise.difficulty === difficulty;

  const matchesEquipment =
    equipment === '' || exercise.equipment === equipment;

  const matchesFavorite =
    !favoritesOnly || isFavorite(exercise.id);

  return (
    matchesSearch &&
    matchesMuscleGroup &&
    matchesDifficulty &&
    matchesEquipment &&
    matchesFavorite
  );
});

}, [
exercises,
searchTerm,
muscleGroup,
difficulty,
equipment,
favoritesOnly,
isFavorite,
]);

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

const setFavoritesOnly = (value: boolean) => {
const nextParams = new URLSearchParams(searchParams);

if (value) {
  nextParams.set('favorites', 'true');
} else {
  nextParams.delete('favorites');
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
favoritesOnly,
filteredExercises,
setSearchTerm: (value) => updateFilter('search', value),
setMuscleGroup: (value) => updateFilter('muscleGroup', value),
setDifficulty: (value) => updateFilter('difficulty', value),
setEquipment: (value) => updateFilter('equipment', value),
setFavoritesOnly,
clearFilters,
};
}
