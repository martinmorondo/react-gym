import ExerciseCard from './ExerciseCard';
import type { Exercise } from '../../../types/exercise';

type ExerciseListProps = {
exercises: Exercise[];
isFavorite: (exerciseId: string) => boolean;
onToggleFavorite: (exerciseId: string) => void;
};

function ExerciseList({
exercises,
isFavorite,
onToggleFavorite,
}: ExerciseListProps) {
if (exercises.length === 0) {
return ( <p className="py-12 text-center text-gray-400">
No hay ejercicios disponibles. </p>
);
}

return ( <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
{exercises.map((exercise) => ( <ExerciseCard
       key={exercise.id}
       exercise={exercise}
       isFavorite={isFavorite(exercise.id)}
       onToggleFavorite={onToggleFavorite}
     />
))} </div>
);
}

export default ExerciseList;
