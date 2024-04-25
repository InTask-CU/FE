import { create } from "zustand";

interface FavouriteStore {
	favourites: number[];
	addToFavourite: (id: number) => void;
}

export const useFavouriteStore = create<FavouriteStore>((set) => ({
	favourites: [],
	addToFavourite: (id) =>
		set((state) => {
			if (state.favourites.find((item) => item === id)) {
				return {
					favourites: [...state.favourites.filter((item) => item !== id)],
				};
			} else {
				return { favourites: [...state.favourites, id] };
			}
		}),
}));
