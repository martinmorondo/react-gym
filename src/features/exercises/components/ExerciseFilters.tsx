import type {
  ExerciseDifficulty,
  ExerciseEquipment,
  ExerciseMuscleGroup,
} from '../../../types/exercise';

type FilterValue<T> = T | '';

type ExerciseFiltersProps = {
  searchTerm: string;
  muscleGroup: FilterValue<ExerciseMuscleGroup>;
  difficulty: FilterValue<ExerciseDifficulty>;
  equipment: FilterValue<ExerciseEquipment>;
  favoritesOnly: boolean;
  muscleGroups: ExerciseMuscleGroup[];
  difficulties: ExerciseDifficulty[];
  equipments: ExerciseEquipment[];
  onSearchChange: (value: string) => void;
  onMuscleGroupChange: (
    value: FilterValue<ExerciseMuscleGroup>
  ) => void;
  onDifficultyChange: (
    value: FilterValue<ExerciseDifficulty>
  ) => void;
  onEquipmentChange: (
    value: FilterValue<ExerciseEquipment>
  ) => void;
  onFavoritesChange: (value: boolean) => void;
  onClear: () => void;
};

const difficultyLabels: Record<
  ExerciseDifficulty,
  string
> = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
};

function ExerciseFilters({
  searchTerm,
  muscleGroup,
  difficulty,
  equipment,
  favoritesOnly,
  muscleGroups,
  difficulties,
  equipments,
  onSearchChange,
  onMuscleGroupChange,
  onDifficultyChange,
  onEquipmentChange,
  onFavoritesChange,
  onClear,
}: ExerciseFiltersProps) {
  return (
    <section
      aria-labelledby="exercise-filters-title"
      className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-xl"
    >
      <div className="border-b border-white/10 px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Biblioteca
            </p>

            <h2
              id="exercise-filters-title"
              className="mt-1 text-xl font-black uppercase tracking-tight text-white"
            >
              Buscar y filtrar
            </h2>
          </div>

          <p className="text-xs text-gray-500">
            Encontrá el ejercicio que necesitás.
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Buscar */}
          <div className="lg:col-span-1">
            <label
              htmlFor="exercise-search"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-gray-400"
            >
              Buscar
            </label>

            <div className="relative">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.817-4.817A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                id="exercise-search"
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  onSearchChange(event.target.value)
                }
                placeholder="Press, sentadilla..."
                className="w-full rounded-xl border border-white/10 bg-black py-3 pl-10 pr-4 text-sm text-white placeholder:text-gray-600 outline-none transition-all focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
              />
            </div>
          </div>

          {/* Grupo muscular */}
          <div>
            <label
              htmlFor="muscle-group"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-gray-400"
            >
              Grupo muscular
            </label>

            <select
              id="muscle-group"
              value={muscleGroup}
              onChange={(event) =>
                onMuscleGroupChange(
                  event.target.value as FilterValue<ExerciseMuscleGroup>
                )
              }
              className="w-full appearance-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition-all focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
            >
              <option value="">Todos</option>

              {muscleGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          {/* Dificultad */}
          <div>
            <label
              htmlFor="exercise-difficulty"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-gray-400"
            >
              Dificultad
            </label>

            <select
              id="exercise-difficulty"
              value={difficulty}
              onChange={(event) =>
                onDifficultyChange(
                  event.target.value as FilterValue<ExerciseDifficulty>
                )
              }
              className="w-full appearance-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition-all focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
            >
              <option value="">Todas</option>

              {difficulties.map((level) => (
                <option key={level} value={level}>
                  {difficultyLabels[level]}
                </option>
              ))}
            </select>
          </div>

          {/* Equipamiento */}
          <div>
            <label
              htmlFor="exercise-equipment"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-gray-400"
            >
              Equipamiento
            </label>

            <select
              id="exercise-equipment"
              value={equipment}
              onChange={(event) =>
                onEquipmentChange(
                  event.target.value as FilterValue<ExerciseEquipment>
                )
              }
              className="w-full appearance-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition-all focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
            >
              <option value="">Todos</option>

              {equipments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <label className="inline-flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-300">
            <input
              type="checkbox"
              checked={favoritesOnly}
              onChange={(event) =>
                onFavoritesChange(event.target.checked)
              }
              className="h-4 w-4 rounded border-white/20 bg-black text-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-0"
            />

            <span>Mostrar solo favoritos</span>
          </label>

          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-2.5 text-sm font-bold text-gray-300 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExerciseFilters;