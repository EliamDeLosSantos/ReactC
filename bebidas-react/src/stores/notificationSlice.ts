import type { StateCreator } from "zustand";

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSlice = {
    notification: Notification
}

export const createNotificationSlice: StateCreator<NotificationSlice> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    }
})