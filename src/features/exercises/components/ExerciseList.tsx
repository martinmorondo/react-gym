import ExerciseCard from './ExerciseCard';
import type { Exercise } from '../../../types/exercise';
import EmptyState from '../../../components/feedback/EmptyState';

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

  if (totalExercises === 0) {
  return (
    <EmptyState
      title="No hay ejercicios disponibles"
      message="La biblioteca de ejercicios está vacía."
    />
  );
}

if (exercises.length === 0) {
  return (
    <EmptyState
      title="No encontramos ejercicios"
      message="Probá modificando los filtros o la búsqueda."
      actionLabel="Limpiar filtros"
      onAction={onClearFilters}
    />
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