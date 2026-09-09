import { Link, useNavigate, useParams } from 'react-router-dom';

import EmptyState from '../components/feedback/EmptyState';
import ErrorState from '../components/feedback/ErrorState';
import LoadingState from '../components/feedback/LoadingState';
import { useExercise } from '../features/exercises/hooks/useExercise';
import { useFavorites } from '../features/exercises/hooks/useFavorites';

const difficultyLabels = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
} as const;

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
      <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <LoadingState message="Cargando ejercicio..." />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ErrorState message={error} />
        </div>
      </main>
    );
  }

  if (!exercise) {
    return (
      <main className="min-h-screen bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
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
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link
          to="/exercises"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <span aria-hidden="true">←</span>
          Volver a ejercicios
        </Link>

        <article className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Imagen */}
            <div className="relative min-h-[380px] overflow-hidden lg:min-h-[650px]">
              <img
                src={exercise.image}
                alt={`Ejercicio: ${exercise.name}`}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  FORGE
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                  {exercise.muscleGroup}
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  {exercise.equipment}
                </p>
              </div>
            </div>

            {/* Información */}
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="mb-6 flex items-start justify-between gap-5">
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-red-400">
                      {exercise.muscleGroup}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300">
                      {difficultyLabels[exercise.difficulty]}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300">
                      {exercise.equipment}
                    </span>
                  </div>

                  <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
                    {exercise.name}
                  </h1>
                </div>

                <button
                  type="button"
                  onClick={() => toggleFavorite(exercise.id)}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl transition-all duration-300 hover:scale-105 hover:border-red-500/50 hover:bg-red-500/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={
                    favorite
                      ? `Quitar ${exercise.name} de favoritos`
                      : `Agregar ${exercise.name} de favoritos`
                  }
                  aria-pressed={favorite}
                >
                  <span
                    className={
                      favorite
                        ? 'text-red-500'
                        : 'text-gray-400'
                    }
                    aria-hidden="true"
                  >
                    {favorite ? '★' : '☆'}
                  </span>
                </button>
              </div>

              <p className="border-b border-white/10 pb-8 text-base leading-7 text-gray-400">
                {exercise.description}
              </p>

              <section
                className="pt-8"
                aria-labelledby="instructions-title"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                      Técnica
                    </p>

                    <h2
                      id="instructions-title"
                      className="mt-1 text-2xl font-black uppercase tracking-tight"
                    >
                      Instrucciones
                    </h2>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    {exercise.instructions.length} pasos
                  </span>
                </div>

                <ol className="space-y-4">
                  {exercise.instructions.map(
                    (instruction, index) => (
                      <li
                        key={`${exercise.id}-instruction-${index}`}
                        className="group flex gap-4 rounded-2xl border border-white/10 bg-black p-4 transition-colors hover:border-white/20"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-black text-white shadow-lg shadow-red-600/10">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <p className="pt-1 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                          {instruction}
                        </p>
                      </li>
                    )
                  )}
                </ol>
              </section>

              <div className="mt-8 border-t border-white/10 pt-6">
                <Link
                  to="/exercises"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-400 transition-colors hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Explorar más ejercicios
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ExerciseDetail;
