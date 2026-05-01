import {create} from 'zustand'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice'
import {devtools} from 'zustand/middleware'
import { createNotificationSlice, type NotificationSlice } from './notificationSlice'



export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))

// Slice Pattern