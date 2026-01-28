import { useForm } from "react-hook-form"
import type { Exercise } from "../types";
import { useExerciseStore } from "../store/ExerciseStore";

export default function ExerciseForm() {
    const { handleSubmit, register, formState: { errors } } = useForm<Exercise>();
    const {addExercise} = useExerciseStore();

    const saveExercise = (data:Exercise) => {
        addExercise(data)
    }

    return (
        <div className="md:w-1/2 lg:w2/5 mx-5">
            <h2 className="text-center text-3xl font-bold">
                Formulario de Ejercicios
            </h2>
            <p className="text-center text-lg mt-5">Agregue ejercicios</p>
            <form onSubmit={handleSubmit(saveExercise)} className="bg-white rounded py-5 px-5 my-5">
                <div className="w-full mb-5">
                    <label className="text-lg uppercase font-bold" htmlFor="name">Nombre del Ejercicio</label>
                    <input
                        id="name"
                        placeholder="Nombre del ejercicio"
                        className="border rounded border-gray-300 text-gray-500 text-xl w-full p-2"
                        {...register('name', {
                            required: 'El nombre del ejercicio es requerido'
                        })}
                    />
                    {errors.name && (
                        <p className="text-red-500 font-bold mt-2 text-lg">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div className="w-full mb-5">
                    <label className="text-lg uppercase font-bold" htmlFor="name">Peso </label>
                    <input
                        id="weight"
                        placeholder="peso en kg"
                        className="border rounded border-gray-300 text-gray-500 text-xl w-full p-2"
                        {...register('weight', {
                            required: 'El peso del ejercicio es requerido'
                        })}
                    />
                    {errors.weight && (
                        <p className="text-red-500 font-bold mt-2 text-lg">
                            {errors.weight.message}
                        </p>
                    )}
                </div>
                <div className="w-full mb-10">
                    <label className="text-lg uppercase font-bold" htmlFor="name">Fecha</label>
                    <input
                        id="date"
                        type="date"
                        placeholder="Fecha"
                        className="border rounded border-gray-300 text-gray-500 text-xl w-full p-2"
                        {...register('date', {
                            required: 'La fecha es requerida'
                        })}
                    />
                    {errors.date && (
                        <p className="text-red-500 font-bold mt-2 text-lg">
                            {errors.date.message}
                        </p>
                    )}
                </div>
                <input className="w-full uppercase bg-teal-400 px-5 py-3 text-xl text-white font-bold rounded-sm"
                    type="submit" value={'Guardar'} />
            </form>
        </div>
    )
};

