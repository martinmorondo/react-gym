import ExercisesFilters from '../features/exercises/components/ExerciseFilters';
import ExerciseList from '../features/exercises/components/ExerciseList';
import { useExerciseFilters } from '../features/exercises/hooks/useExerciseFilters';
import { useExercises } from '../features/exercises/hooks/useExercises';
import { useFavorites } from '../features/exercises/hooks/useFavorites';

import ErrorState from '../components/feedback/ErrorState';
import LoadingState from '../components/feedback/LoadingState';

import {
  DIFFICULTIES,
  EQUIPMENT_OPTIONS,
  MUSCLE_GROUPS,
} from '../constants/exerciseOptions';

function Exercises() {
  const {
    exercises,
    isLoading,
    error,
    refetch,
  } = useExercises();

  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites();

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

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <header className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
            Biblioteca
          </p>

          <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
            Encontrá el ejercicio
            <span className="block text-red-500">
              que necesitás.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Explorá nuestra biblioteca de ejercicios por grupo muscular,
            equipamiento, dificultad o favoritos.
          </p>
        </header>

        {isLoading && (
          <LoadingState message="Cargando ejercicios..." />
        )}

        {error && (
          <ErrorState
            message={error}
            onRetry={() => void refetch()}
          />
        )}

        {!isLoading && !error && (
          <>
            <ExercisesFilters
              searchTerm={searchTerm}
              muscleGroup={muscleGroup}
              difficulty={difficulty}
              equipment={equipment}
              favoritesOnly={favoritesOnly}
              muscleGroups={MUSCLE_GROUPS}
              difficulties={DIFFICULTIES}
              equipments={EQUIPMENT_OPTIONS}
              onSearchChange={setSearchTerm}
              onMuscleGroupChange={setMuscleGroup}
              onDifficultyChange={setDifficulty}
              onEquipmentChange={setEquipment}
              onFavoritesChange={setFavoritesOnly}
              onClear={clearFilters}
            />

            <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Resultados
                </p>

                <p
                  className="mt-1 text-sm text-gray-300"
                  aria-live="polite"
                >
                  {filteredExercises.length === 1
                    ? '1 ejercicio encontrado'
                    : `${filteredExercises.length} ejercicios encontrados`}
                </p>
              </div>

              {favoritesOnly && (
                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
                  Solo favoritos
                </span>
              )}
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
      </section>
    </main>
  );
}

export default Exercises;
