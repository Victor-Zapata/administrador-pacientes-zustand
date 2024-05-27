import { create } from 'zustand'
import { DraftPacient, Pacient } from '../types'
import { v4 as uuidv4 } from 'uuid'

type PacientState = {
    pacients: Pacient[],
    addPacient: (data: DraftPacient) => void
}

const createPacient = (pacient: DraftPacient): Pacient => {
    return { ...pacient, id: uuidv4() }
}

export const usePacientStore = create<PacientState>((set) => ({
    pacients: [],
    addPacient: (data) => set((state) => ({ 
        pacients: [...state.pacients, createPacient(data)] 
    }))
}))

// function Counter() {
// const { count, inc } = useStore()
// return (
//     <div>
//         <span>{count}</span>
//         <button onClick={inc}>one up</button>
//     </div>
// )
// }