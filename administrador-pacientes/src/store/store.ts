import { create } from 'zustand'
import { DraftPatient, Patient } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type PatientState = {
    patients: Patient[],
    addPatient: (data: DraftPatient) => void,
    deletePatient: (id: Patient['id']) => void,
    activeId: Patient['id'],
    getPatientById: (id: Patient['id']) => void,
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(
    devtools(
        persist(
            (set) => ({
                activeId: '',
                patients: [],
                addPatient: (data) => set((state) => ({
                    patients: [...state.patients, createPatient(data)]
                })),
                deletePatient: (id) => set((state) => ({
                    patients: state.patients.filter((item) => {
                        return item.id !== id
                    })
                })),
                getPatientById: (id) => {
                    set(() => ({
                        activeId: id
                    }))
                },
                updatePatient: (data) => {
                    set((state) => ({
                        patients: state.patients.map(item => (
                            item.id === state.activeId ? { id: state.activeId, ...data } : item)),
                        activeId: ''
                    }))
                }
            }), {
            name: 'patient-storage',
            storage: createJSONStorage(() => sessionStorage)
        })
    ))

// function Counter() {
// const { count, inc } = useStore()
// return (
//     <div>
//         <span>{count}</span>
//         <button onClick={inc}>one up</button>
//     </div>
// )
// }