import { toast } from "react-toastify";
import { usePatientStore } from "../store/store";
import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem";

export type PatientDetailProps = {
    patient: Patient
}
const PatientDetail = ({ patient }: PatientDetailProps) => {
    const { deletePatient, getPatientById } = usePatientStore()

    const handleClic = () => {
        deletePatient(patient.id)
        toast.error('Paciente eliminado correctamente')
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl text-left">
            <PatientDetailsItem label={'ID'} data={patient.id} />
            <PatientDetailsItem label={'NOMBRE'} data={patient.name} />
            <PatientDetailsItem label={'PROPIETARIO'} data={patient.caretaker} />
            <PatientDetailsItem label={'EMAIL'} data={patient.email} />
            <PatientDetailsItem label={'FECHA ALTA'} data={patient.date.toString()} />
            <PatientDetailsItem label={'SINTOMAS'} data={patient.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 text-sm bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleClic}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default PatientDetail