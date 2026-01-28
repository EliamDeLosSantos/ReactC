import { create } from "zustand";
import type { Exercise } from "../types";

export type ExerciseState = {
    exercises: Exercise[],
    addExercise: (exercise:Exercise) => void
}

export const useExerciseStore = create<ExerciseState>()(set => ({
    exercises:[],
    addExercise: (exercise) => {
        set(state => ({
            exercises: [...state.exercises, exercise]
        }))
    }
}));