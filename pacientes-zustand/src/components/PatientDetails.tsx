import { toast } from "react-toastify"
import { usePatientStore } from "../store/store"
import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
    const {deletePatient, getPatientById} = usePatientStore();
    const handleDelete = ()=> {
        toast.error('Paciente eliminado correctamente!', {autoClose: 2000})
        deletePatient(patient.id);
    }
    return (
        <div className="bg-white mx-5 px-5 my-10 py-10 rounded-xl shadow-md">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Propietario" data={patient.caretaker} />
            <PatientDetailItem label="Email" data={patient.email} />
            <PatientDetailItem label="Fecha de Alta" data={patient.date.toString()} />
            <PatientDetailItem label="Sintomas" data={patient.symptoms} />

            <div className="flex flex-col gap-3 lg:flex-row justify-between mt-5">
                <button
                onClick={() => getPatientById(patient.id)}
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 py-2 px-10 text-white rounded-lg uppercase font-bold"
                >
                    Editar
                </button>
                <button
                    onClick={handleDelete}
                    type="button"
                    className="bg-red-500 hover:bg-red-700 py-2 px-10 text-white rounded-lg uppercase font-bold"
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
};