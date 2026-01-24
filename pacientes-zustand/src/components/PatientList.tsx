import { usePatientStore } from "../store/store"
import PatientDetails from "./PatientDetails";
export default function PatientList() {
  const {patients} = usePatientStore();
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {
        patients.length ? (
          <>
          <h2 className="text-center font-black text-3xl mb-5">
            Listado de Pacientes
          </h2>
          <p className="text-center text-xl mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>
            {patients.map(patient => (
              <PatientDetails key={patient.id} patient={patient}></PatientDetails>
            ))}
          </>
        ):(
          <>
            <h2 className="font-black text-center text-3xl mb-5">
              No hay Pacientes
            </h2>
            <p className="text-xl mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold">
                y apareceran en este lugar
              </span>
            </p>
          </>
        )
      }
    </div>
  )
};

