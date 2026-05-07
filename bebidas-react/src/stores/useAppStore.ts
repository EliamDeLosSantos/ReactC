import {create} from 'zustand'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice'
import {devtools} from 'zustand/middleware'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice'
import { createAISlice, type AISliceType } from './aiSlice'



export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
})))

// Slice Pattern