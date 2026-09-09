import ExerciseFilters from '../features/exercises/components/ExerciseFilters';
import ExerciseList from '../features/exercises/components/ExerciseList';
import { useExerciseFilters } from '../features/exercises/hooks/useExerciseFilters';
import { useExercises } from '../features/exercises/hooks/useExercises';

function Exercises() {
const { exercises, isLoading, error, refetch } = useExercises();

const uniqueMuscleGroups = [
...new Set(exercises.map((exercise) => exercise.muscleGroup)),
];

const uniqueDifficulties = [
...new Set(exercises.map((exercise) => exercise.difficulty)),
];

const uniqueEquipments = [
...new Set(exercises.map((exercise) => exercise.equipment)),
];

const {
searchTerm,
muscleGroup,
difficulty,
equipment,
filteredExercises,
setSearchTerm,
setMuscleGroup,
setDifficulty,
setEquipment,
clearFilters,
} = useExerciseFilters(exercises);

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

    {!isLoading && !error && (
      <>
        <ExerciseFilters
          searchTerm={searchTerm}
          muscleGroup={muscleGroup}
          difficulty={difficulty}
          equipment={equipment}
          muscleGroups={uniqueMuscleGroups}
          difficulties={uniqueDifficulties}
          equipments={uniqueEquipments}
          onSearchChange={setSearchTerm}
          onMuscleGroupChange={setMuscleGroup}
          onDifficultyChange={setDifficulty}
          onEquipmentChange={setEquipment}
          onClear={clearFilters}
        />

        <div className="mb-4 text-sm text-gray-400" aria-live="polite">
          {filteredExercises.length === 1
            ? '1 ejercicio encontrado'
            : `${filteredExercises.length} ejercicios encontrados`}
        </div>

        <ExerciseList exercises={filteredExercises} />
      </>
    )}
  </div>
</main>
);
}

export default Exercises;
