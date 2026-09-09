import { Link } from 'react-router-dom';

import type { Exercise } from '../../../types/exercise';

type ExerciseCardProps = {
  exercise: Exercise;
  isFavorite: boolean;
  onToggleFavorite: (exerciseId: string) => void;
};

const difficultyLabels = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
} as const;

function ExerciseCard({
  exercise,
  isFavorite,
  onToggleFavorite,
}: ExerciseCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="relative overflow-hidden">
        <img
          src={exercise.image}
          alt={`Ejercicio: ${exercise.name}`}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <button
          type="button"
          onClick={() => onToggleFavorite(exercise.id)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-xl text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label={
            isFavorite
              ? `Quitar ${exercise.name} de favoritos`
              : `Agregar ${exercise.name} a favoritos`
          }
          aria-pressed={isFavorite}
        >
          <span
            className={isFavorite ? 'text-red-500' : 'text-white'}
            aria-hidden="true"
          >
            {isFavorite ? '★' : '☆'}
          </span>
        </button>

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            {exercise.muscleGroup}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-red-500">
            {difficultyLabels[exercise.difficulty]}
          </span>

          <span className="text-xs text-gray-500">
            {exercise.equipment}
          </span>
        </div>

        <h2 className="text-2xl font-black tracking-tight text-white">
          <Link
            to={`/exercises/${exercise.id}`}
            className="rounded-sm transition-colors hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {exercise.name}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
          {exercise.description}
        </p>

        <Link
          to={`/exercises/${exercise.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Ver ejercicio
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export default ExerciseCard;
