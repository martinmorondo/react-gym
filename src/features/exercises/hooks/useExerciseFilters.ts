import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from '../../../hooks/useDebounce';
import {
  DIFFICULTIES,
  EQUIPMENT_OPTIONS,
  MUSCLE_GROUPS,
} from '../../../constants/exerciseOptions';
import type {
  Exercise,
  ExerciseDifficulty,
  ExerciseEquipment,
  ExerciseMuscleGroup,
} from '../../../types/exercise';

type FilterValue<T> = T | '';

type UseExerciseFiltersResult = {
  searchTerm: string;
  muscleGroup: FilterValue<ExerciseMuscleGroup>;
  difficulty: FilterValue<ExerciseDifficulty>;
  equipment: FilterValue<ExerciseEquipment>;
  favoritesOnly: boolean;
  filteredExercises: Exercise[];
  setSearchTerm: (value: string) => void;
  setMuscleGroup: (value: FilterValue<ExerciseMuscleGroup>) => void;
  setDifficulty: (value: FilterValue<ExerciseDifficulty>) => void;
  setEquipment: (value: FilterValue<ExerciseEquipment>) => void;
  setFavoritesOnly: (value: boolean) => void;
  clearFilters: () => void;
};

type FavoriteChecker = (exerciseId: string) => boolean;

function isMuscleGroup(
  value: string
): value is ExerciseMuscleGroup {
  return MUSCLE_GROUPS.includes(value as ExerciseMuscleGroup);
}

function isDifficulty(
  value: string
): value is ExerciseDifficulty {
  return DIFFICULTIES.includes(value as ExerciseDifficulty);
}

function isEquipment(
  value: string
): value is ExerciseEquipment {
  return EQUIPMENT_OPTIONS.includes(value as ExerciseEquipment);
}

export function useExerciseFilters(
  exercises: Exercise[],
  isFavorite: FavoriteChecker
): UseExerciseFiltersResult {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTermState] = useState(
    () => searchParams.get('search') ?? ''
  );

  const muscleGroupParam = searchParams.get('muscleGroup') ?? '';
  const difficultyParam = searchParams.get('difficulty') ?? '';
  const equipmentParam = searchParams.get('equipment') ?? '';

  const muscleGroup: FilterValue<ExerciseMuscleGroup> =
    isMuscleGroup(muscleGroupParam)
      ? muscleGroupParam
      : '';

  const difficulty: FilterValue<ExerciseDifficulty> =
    isDifficulty(difficultyParam)
      ? difficultyParam
      : '';

  const equipment: FilterValue<ExerciseEquipment> =
    isEquipment(equipmentParam)
      ? equipmentParam
      : '';

  const favoritesOnly =
    searchParams.get('favorites') === 'true';

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const currentSearch =
      searchParams.get('search') ?? '';

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
  }, [
    debouncedSearchTerm,
    searchParams,
    setSearchParams,
  ]);

  const filteredExercises = useMemo(() => {
    const normalizedSearchTerm =
      searchTerm.trim().toLowerCase();

    return exercises.filter((exercise) => {
      const searchableText = [
        exercise.name,
        exercise.description,
        exercise.muscleGroup,
        exercise.equipment,
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch =
        normalizedSearchTerm === '' ||
        searchableText.includes(normalizedSearchTerm);

      const matchesMuscleGroup =
        muscleGroup === '' ||
        exercise.muscleGroup === muscleGroup;

      const matchesDifficulty =
        difficulty === '' ||
        exercise.difficulty === difficulty;

      const matchesEquipment =
        equipment === '' ||
        exercise.equipment === equipment;

      const matchesFavorite =
        !favoritesOnly ||
        isFavorite(exercise.id);

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

  const setSearchTerm = (value: string) => {
    setSearchTermState(value);
  };

  const setMuscleGroup = (
    value: FilterValue<ExerciseMuscleGroup>
  ) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set('muscleGroup', value);
    } else {
      nextParams.delete('muscleGroup');
    }

    setSearchParams(nextParams);
  };

  const setDifficulty = (
    value: FilterValue<ExerciseDifficulty>
  ) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set('difficulty', value);
    } else {
      nextParams.delete('difficulty');
    }

    setSearchParams(nextParams);
  };

  const setEquipment = (
    value: FilterValue<ExerciseEquipment>
  ) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set('equipment', value);
    } else {
      nextParams.delete('equipment');
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
    setSearchTerm,
    setMuscleGroup,
    setDifficulty,
    setEquipment,
    setFavoritesOnly,
    clearFilters,
  };
}
