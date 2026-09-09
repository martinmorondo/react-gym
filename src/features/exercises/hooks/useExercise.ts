import { useEffect, useState } from 'react';

import { exerciseService } from '../../../services/exerciseService';
import type { Exercise } from '../../../types/exercise';

type UseExerciseResult = {
  exercise: Exercise | undefined;
  isLoading: boolean;
  error: string | null;
};

export function useExercise(
  id: string | undefined
): UseExerciseResult {
  const [exercise, setExercise] = useState<Exercise>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExercise = async () => {
      if (!id) {
        setExercise(undefined);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const data = await exerciseService.getById(id);

        setExercise(data);
      } catch {
        setError('No pudimos cargar el ejercicio.');
      } finally {
        setIsLoading(false);
      }
    };

    void loadExercise();
  }, [id]);

  return {
    exercise,
    isLoading,
    error,
  };
}