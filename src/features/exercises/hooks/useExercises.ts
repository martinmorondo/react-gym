import { useCallback, useEffect, useState } from 'react';
import type { Exercise } from '../../../types/exercise';
import { exerciseService } from '../../../services/exerciseService';

type UseExercisesResult = {
exercises: Exercise[];
isLoading: boolean;
error: string | null;
refetch: () => Promise<void>;
};

export function useExercises(): UseExercisesResult {
const [exercises, setExercises] = useState<Exercise[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

const loadExercises = useCallback(async () => {
try {
setIsLoading(true);
setError(null);

  const data = await exerciseService.getAll();

  setExercises(data);
} catch {
  setError('No pudimos cargar los ejercicios.');
} finally {
  setIsLoading(false);
}

}, []);

useEffect(() => {
void loadExercises();
}, [loadExercises]);

return {
exercises,
isLoading,
error,
refetch: loadExercises,
};
}
