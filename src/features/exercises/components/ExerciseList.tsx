import ExerciseCard from './ExerciseCard';
import type { Exercise } from '../../../types/exercise';

type ExerciseListProps = {
exercises: Exercise[];
};

function ExerciseList({ exercises }: ExerciseListProps) {
if (exercises.length === 0) {
return ( <p className="py-12 text-center text-gray-400">
No hay ejercicios disponibles. </p>
);
}

return ( <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
{exercises.map((exercise) => ( <ExerciseCard
       key={exercise.id}
       exercise={exercise}
     />
))} </div>
);
}

export default ExerciseList;
