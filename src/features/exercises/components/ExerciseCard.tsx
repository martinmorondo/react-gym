import type { Exercise } from '../../../types/exercise';
import { Link } from 'react-router-dom';

type ExerciseCardProps = {
exercise: Exercise;
isFavorite: boolean;
onToggleFavorite: (exerciseId: string) => void;
};

function ExerciseCard({
exercise,
isFavorite,
onToggleFavorite,
}: ExerciseCardProps) {
return ( <article className="overflow-hidden rounded-lg bg-white shadow-lg"> <div className="relative">
<img
src={exercise.image}
alt={`Ejercicio: ${exercise.name}`}
className="h-56 w-full object-cover"
loading="lazy"
/>

    <button
      type="button"
      onClick={() => onToggleFavorite(exercise.id)}
      className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-xl text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
      aria-label={
        isFavorite
          ? `Quitar ${exercise.name} de favoritos`
          : `Agregar ${exercise.name} a favoritos`
      }
      aria-pressed={isFavorite}
    >
      {isFavorite ? '★' : '☆'}
    </button>
  </div>

  <div className="p-5">
    <div className="mb-3 flex flex-wrap gap-2">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
        {exercise.muscleGroup}
      </span>

      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
        {exercise.difficulty}
      </span>
    </div>

    <h2 className="mb-2 text-xl font-bold text-gray-900">
      <Link
        to={`/exercises/${exercise.id}`}
        className="rounded-sm transition-colors hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        {exercise.name}
      </Link>
    </h2>

    <p className="mb-4 text-sm leading-6 text-gray-600">
      {exercise.description}
    </p>

    <p className="text-sm font-medium text-gray-700">
      Equipamiento: {exercise.equipment}
    </p>
  </div>
</article>
);
}

export default ExerciseCard;
