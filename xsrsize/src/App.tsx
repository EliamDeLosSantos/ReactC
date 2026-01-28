import ExerciseForm from "./components/ExerciseForm"
import ExerciseList from "./components/ExerciseList"

function App() {

  return (
    <>
      <div>
        <h1 className="text-center font-black text-5xl my-10">
          <span className="text-teal-600">
            Ejercicios {''}
          </span>
          Realizados el Dia de Hoy</h1>
          <div className="md:flex">
            <ExerciseForm/>
            <ExerciseList/>
          </div>
      </div>
    </>
  )
}

export default App
