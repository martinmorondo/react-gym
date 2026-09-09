import ExerciseFilters from '../features/exercises/components/ExerciseFilters';
import ExerciseList from '../features/exercises/components/ExerciseList';
import { useExerciseFilters } from '../features/exercises/hooks/useExerciseFilters';
import { useExercises } from '../features/exercises/hooks/useExercises';
import { useFavorites } from '../features/exercises/hooks/useFavorites';
import LoadingState from '../components/feedback/LoadingState';
import ErrorState from '../components/feedback/ErrorState';

function Exercises() {
const { exercises, isLoading, error, refetch } = useExercises();

const {
isFavorite,
toggleFavorite,
} = useFavorites();

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
favoritesOnly,
filteredExercises,
setSearchTerm,
setMuscleGroup,
setDifficulty,
setEquipment,
setFavoritesOnly,
clearFilters,
} = useExerciseFilters(exercises, isFavorite);

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

    {isLoading && <LoadingState message="Cargando ejercicios..." />}

    {error && (
  <ErrorState
    message={error}
    onRetry={() => void refetch()}
  />
)}

    {!isLoading && !error && (
      <>
        <ExerciseFilters
          searchTerm={searchTerm}
          muscleGroup={muscleGroup}
          difficulty={difficulty}
          equipment={equipment}
          favoritesOnly={favoritesOnly}
          muscleGroups={uniqueMuscleGroups}
          difficulties={uniqueDifficulties}
          equipments={uniqueEquipments}
          onSearchChange={setSearchTerm}
          onMuscleGroupChange={setMuscleGroup}
          onDifficultyChange={setDifficulty}
          onEquipmentChange={setEquipment}
          onFavoritesChange={setFavoritesOnly}
          onClear={clearFilters}
        />

        <div
          className="mb-4 text-sm text-gray-400"
          aria-live="polite"
        >
          {filteredExercises.length === 1
            ? '1 ejercicio encontrado'
            : `${filteredExercises.length} ejercicios encontrados`}
        </div>

       <ExerciseList
        exercises={filteredExercises}
        totalExercises={exercises.length}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
        onClearFilters={clearFilters}
      />
      </>
    )}
  </div>
</main>
);
}

export default Exercises;
