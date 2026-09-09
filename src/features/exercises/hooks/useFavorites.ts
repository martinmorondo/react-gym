import { useCallback } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

const FAVORITES_STORAGE_KEY = 'react-gym-favorite-exercises';

type UseFavoritesResult = {
favorites: string[];
isFavorite: (exerciseId: string) => boolean;
toggleFavorite: (exerciseId: string) => void;
};

export function useFavorites(): UseFavoritesResult {
const [favorites, setFavorites] = useLocalStorage<string[]>(
FAVORITES_STORAGE_KEY,
[]
);

const isFavorite = useCallback(
(exerciseId: string) => favorites.includes(exerciseId),
[favorites]
);

const toggleFavorite = useCallback(
(exerciseId: string) => {
setFavorites((currentFavorites) => {
if (currentFavorites.includes(exerciseId)) {
return currentFavorites.filter(
(id) => id !== exerciseId
);
}

    return [...currentFavorites, exerciseId];
  });
},
[setFavorites]
);

return {
favorites,
isFavorite,
toggleFavorite,
};
}
