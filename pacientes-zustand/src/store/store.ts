import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuid } from 'uuid'
import type { DraftPatient, Patient } from '../types'

type PatientState = {
    patients: Patient[],
    activeId: Patient['id'],
    addPatient: (data: DraftPatient) => void,
    deletePatient: (id: Patient['id']) => void,
    getPatientById: (id: Patient['id']) => void,
    updatePatient:(patientDraft: DraftPatient) => void
}

const createPatient = (patientDraft: DraftPatient): Patient => {
    return { ...patientDraft, id: uuid() }
}

export const usePatientStore = create<PatientState>()(
    devtools(
        persist((set) => ({
        patients: [],
        activeId: '',
        addPatient: (data) => {
            const newPatient = createPatient(data);
            set((state) => ({
                patients: [...state.patients, newPatient
                ]
            }))
        },
        deletePatient: (id) => {
            set(state => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient:(patientDraft) => {
            set((state) => ({
                patients: state.patients.map(patient => patient.id === state.activeId ? {
                    id: state.activeId,
                    ...patientDraft
                }: patient),
                activeId: ''
            }))
        }
    }),
    {
        name: 'patient-storage',
        // storage: createJSONStorage(()=> sessionStorage) // esto es para decirle que se guarde en sessionStorage
        //default is localStorage
    })
))