import { useExerciseStore } from "../store/ExerciseStore";

export default function ExerciseList() {
  const {exercises} = useExerciseStore();

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h1>
            ExerciseList
        </h1>

        <div>
          {exercises.map(exercise => (
              <div>
                <label>
                  
                  <span></span>
                </label>
              </div>
          ))}
        </div>
    </div>
  )
};

