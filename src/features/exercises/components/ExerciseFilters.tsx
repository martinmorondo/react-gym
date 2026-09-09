type ExerciseFiltersProps = {
searchTerm: string;
muscleGroup: string;
difficulty: string;
equipment: string;
favoritesOnly: boolean;
muscleGroups: string[];
difficulties: string[];
equipments: string[];
onSearchChange: (value: string) => void;
onMuscleGroupChange: (value: string) => void;
onDifficultyChange: (value: string) => void;
onEquipmentChange: (value: string) => void;
onFavoritesChange: (value: boolean) => void;
onClear: () => void;
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
return ( <section
   aria-labelledby="exercise-filters-title"
   className="mb-8 rounded-lg bg-gray-800 p-5 shadow-lg"
 > <h2
     id="exercise-filters-title"
     className="mb-5 text-lg font-semibold text-white"
   >
Buscar y filtrar </h2>

  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    <div>
      <label
        htmlFor="exercise-search"
        className="mb-2 block text-sm font-medium text-gray-200"
      >
        Buscar
      </label>

      <input
        id="exercise-search"
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Press, sentadilla..."
        className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label
        htmlFor="muscle-group"
        className="mb-2 block text-sm font-medium text-gray-200"
      >
        Grupo muscular
      </label>

      <select
        id="muscle-group"
        value={muscleGroup}
        onChange={(event) => onMuscleGroupChange(event.target.value)}
        className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Todos</option>

        {muscleGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label
        htmlFor="exercise-difficulty"
        className="mb-2 block text-sm font-medium text-gray-200"
      >
        Dificultad
      </label>

      <select
        id="exercise-difficulty"
        value={difficulty}
        onChange={(event) => onDifficultyChange(event.target.value)}
        className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Todas</option>

        {difficulties.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label
        htmlFor="exercise-equipment"
        className="mb-2 block text-sm font-medium text-gray-200"
      >
        Equipamiento
      </label>

      <select
        id="exercise-equipment"
        value={equipment}
        onChange={(event) => onEquipmentChange(event.target.value)}
        className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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

  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <label className="inline-flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-200">
      <input
        type="checkbox"
        checked={favoritesOnly}
        onChange={(event) => onFavoritesChange(event.target.checked)}
        className="h-4 w-4 rounded border-gray-600 bg-gray-900 text-blue-600 focus:ring-2 focus:ring-blue-500"
      />

      <span>
        Mostrar solo favoritos
      </span>
    </label>

    <button
      type="button"
      onClick={onClear}
      className="self-start rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:self-auto"
    >
      Limpiar filtros
    </button>
  </div>
</section>
);
}

export default ExerciseFilters;
