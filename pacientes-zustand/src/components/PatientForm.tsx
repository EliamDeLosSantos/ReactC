import {useForm} from 'react-hook-form'
import Error from './Error';
import type { DraftPatient } from '../types';
import { usePatientStore } from '../store/store';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
export default function PatientForm() {

    const {addPatient, activeId, patients, updatePatient} = usePatientStore();
    // const addPatient = usePatientStore(state => state.addPatient); another wae

    const {register, handleSubmit,setValue ,formState: {errors}, reset} = useForm<DraftPatient>()
    
    useEffect(() => {
        if(!activeId)return;

        // const activePatient = patients.filter(patient => patient.id === activeId)[0];
        const activePatient = patients.find(patient => patient.id === activeId);
        if(!activePatient) return;

        // reset(activePatient)
        setValue('name', activePatient.name)
        setValue('caretaker', activePatient.caretaker)
        setValue('date', activePatient.date)
        setValue('email', activePatient.email)
        setValue('symptoms', activePatient.symptoms)
    },[activeId])

    const registerPatient = (data: DraftPatient) => {
        if(activeId){
            updatePatient(data)
            toast.success('Paciente actualizado correctamente!', {autoClose: 2000});
        }else{
            addPatient(data);
            toast.success('Paciente registrado correctamente!', {autoClose: 2000});
        }
        reset();
    }


    return (
        <div className=" md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="text-center text-3xl font-black">Seguimiento de Pacientes</h2>
            <p className="text-center text-lg mt-5 mb-10">
                Agrega Pacientes y {''}
                <span className="text-indigo-600 font-bold">
                    Administralos
                </span>
            </p>
            <form onSubmit={handleSubmit(registerPatient)} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" noValidate>
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nombre del paciente"
                        className="w-full p-3 border border-gray-100"
                        {...register('name', {
                            required:'El nombre del paciente es obligatorio',
                            // maxLength: {
                            //     value: 8,
                            //     message: 'Maximo 8 caracteres'
                            // }
                        })}
                    />
                    {errors.name && (
                    <Error>
                        {errors.name?.message}
                    </Error>
                    )}
                    {/* {errors.maxLength && (
                    <Error>
                        {errors.maxLength?.message}
                    </Error>
                    )} */}

                </div>
                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="w-full p-3 border border-gray-100"
                        {...register('caretaker', {
                            required: 'El nombre del propietario es obligatorio'
                        })}
                    />
                    {errors.caretaker && (
                    <Error>
                        {errors.caretaker?.message}
                    </Error>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="w-full p-3 border border-gray-100"
                        {...register('email',{
                            required: 'El email es obligatorio',
                            pattern:{
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message:'Inserte un email valido'
                            }
                        })}
                    />
                    {errors.email && (
                    <Error>
                        {errors.email?.message}
                    </Error>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha de alta
                    </label>
                    <input
                        id="date"
                        type="date"
                        className="w-full p-3 border border-gray-100"
                        {...register('date', {
                            required: 'La fecha de alta es obligatoria'
                        })}
                    />
                    {errors.date && (
                    <Error>
                        {errors.date?.message}
                    </Error>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="symptoms"
                        placeholder="Sintomas del paciente"
                        className="w-full p-3 border border-gray-100"
                        {...register('symptoms', {
                            required: 'El campo de sintomas es obligatorio'
                        })}
                    />
                    {errors.symptoms && (
                    <Error>
                        {errors.symptoms?.message}
                    </Error>
                    )}
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase
                    font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={'Guardar Paciente'}
                />
            </form>
        </div>
    )
};

