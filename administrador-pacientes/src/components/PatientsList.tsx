import { usePacientStore } from "../store/store"
import PacientDetail from "./PacientDetail"

const PatientsList = () => {
    const { pacients } = usePacientStore()

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {
                pacients.length < 1 ? <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </> :
                    <>
                        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {''}
                            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                            {
                                pacients.map((pacient) => {
                                    return <PacientDetail key={pacient.id} pacient={pacient} />
                                })
                            }
                        </p>
                    </>

            }
        </div>
    )
}

export default PatientsList