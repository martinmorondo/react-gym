import ExerciseCard from './ExerciseCard';
import type { Exercise } from '../../../types/exercise';

type ExerciseListProps = {
  exercises: Exercise[];
  totalExercises: number;
  isFavorite: (exerciseId: string) => boolean;
  onToggleFavorite: (exerciseId: string) => void;
  onClearFilters: () => void;
};

function ExerciseList({
  exercises,
  totalExercises,
  isFavorite,
  onToggleFavorite,
  onClearFilters,
}: ExerciseListProps) {
  if (totalExercises === 0) {
    return (
      <div className="rounded-lg bg-gray-800 px-6 py-12 text-center">
        <h2 className="mb-2 text-xl font-semibold text-white">
          No hay ejercicios disponibles
        </h2>

        <p className="text-gray-400">
          La biblioteca de ejercicios está vacía.
        </p>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="rounded-lg bg-gray-800 px-6 py-12 text-center">
        <h2 className="mb-2 text-xl font-semibold text-white">
          No encontramos ejercicios
        </h2>

        <p className="mb-5 text-gray-400">
          Probá modificando los filtros o la búsqueda.
        </p>

        <button
          type="button"
          onClick={onClearFilters}
          className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Limpiar filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          isFavorite={isFavorite(exercise.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default ExerciseList;