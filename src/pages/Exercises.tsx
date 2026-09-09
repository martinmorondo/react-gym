import ExerciseList from '../features/exercises/components/ExerciseList';
import { useExercises } from '../features/exercises/hooks/useExercises';

function Exercises() {
const { exercises, isLoading, error, refetch } = useExercises();

return ( <main className="min-h-screen bg-gray-900 px-4 py-10"> <div className="mx-auto max-w-7xl"> <header className="mb-10"> <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
Biblioteca </p>

      <h1 className="mb-4 text-4xl font-bold text-white">
        Ejercicios
      </h1>

      <p className="max-w-2xl text-gray-400">
        Explora ejercicios organizados por grupo muscular,
        equipamiento y nivel de dificultad.
      </p>
    </header>

    {isLoading && (

  <p className="py-12 text-center text-gray-400" role="status">
    Cargando ejercicios...
  </p>
)}

{error && (

  <div
    className="rounded-lg border border-red-500/30 bg-red-500/10 p-6 text-center"
    role="alert"
  >
    <p className="mb-4 font-medium text-red-300">
      {error}
    </p>
<button
  type="button"
  className="rounded-md bg-red-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
  onClick={() => void refetch()}
>
  Reintentar
</button>

  </div>
)}

{!isLoading && !error && ( <ExerciseList exercises={exercises} />
)}

  </div>
</main>
);
}

export default Exercises;
