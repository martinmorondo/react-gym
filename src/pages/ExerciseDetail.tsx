import { Link, useNavigate, useParams } from 'react-router-dom';

import EmptyState from '../components/feedback/EmptyState';
import ErrorState from '../components/feedback/ErrorState';
import LoadingState from '../components/feedback/LoadingState';
import { useExercise } from '../features/exercises/hooks/useExercise';
import { useFavorites } from '../features/exercises/hooks/useFavorites';

function ExerciseDetail() {
    const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    exercise,
    isLoading,
    error,
  } = useExercise(id);

  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-900 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <LoadingState message="Cargando ejercicio..." />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-900 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <ErrorState message={error} />
        </div>
      </main>
    );
  }

  if (!exercise) {
    return (
      <main className="min-h-screen bg-gray-900 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <EmptyState
        title="Ejercicio no encontrado"
        message="El ejercicio que buscás no existe o ya no está disponible."
        actionLabel="Volver a ejercicios"
        onAction={() => {
            navigate('/exercises');
        }}
        />
        </div>
      </main>
    );
  }

  const favorite = isFavorite(exercise.id);

  return (
    <main className="min-h-screen bg-gray-900 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/exercises"
          className="mb-8 inline-flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          ← Volver a ejercicios
        </Link>

        <article className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <img
                src={exercise.image}
                alt={`Ejercicio: ${exercise.name}`}
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                  {exercise.muscleGroup}
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  {exercise.difficulty}
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  {exercise.equipment}
                </span>
              </div>

              <div className="mb-4 flex items-start justify-between gap-4">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {exercise.name}
                </h1>

                <button
                  type="button"
                  onClick={() => toggleFavorite(exercise.id)}
                  className="shrink-0 rounded-full border border-gray-200 bg-white p-3 text-2xl text-gray-700 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={
                    favorite
                      ? `Quitar ${exercise.name} de favoritos`
                      : `Agregar ${exercise.name} a favoritos`
                  }
                  aria-pressed={favorite}
                >
                  {favorite ? '★' : '☆'}
                </button>
              </div>

              <p className="mb-8 leading-7 text-gray-600">
                {exercise.description}
              </p>

              <section aria-labelledby="instructions-title">
                <h2
                  id="instructions-title"
                  className="mb-4 text-xl font-bold text-gray-900"
                >
                  Instrucciones
                </h2>

                <ol className="space-y-4">
                  {exercise.instructions.map(
                    (instruction, index) => (
                      <li
                        key={`${exercise.id}-instruction-${index}`}
                        className="flex gap-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                          {index + 1}
                        </span>

                        <p className="leading-7 text-gray-700">
                          {instruction}
                        </p>
                      </li>
                    )
                  )}
                </ol>
              </section>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default ExerciseDetail;
