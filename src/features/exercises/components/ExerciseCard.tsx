import type { Exercise } from '../../../types/exercise';

type ExerciseCardProps = {
exercise: Exercise;
};

function ExerciseCard({ exercise }: ExerciseCardProps) {
return ( <article className="overflow-hidden rounded-lg bg-white shadow-lg">
<img
src={exercise.image}
alt={`Ejercicio: ${exercise.name}`}
className="h-56 w-full object-cover"
loading="lazy"
/>

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
      {exercise.name}
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
