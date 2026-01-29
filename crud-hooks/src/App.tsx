import UsersForm from "./components/UsersForm"
import UsersList from "./components/UsersList"
import { UseUsersData } from "./hooks/useUsersData"

function App() {
  const {users,
        errors,
        register,
        handleSubmit,
        handleDelete,
        handleFormSubmit,
        handleUpdatingIndex
      } = UseUsersData()

  return (
    <div className="text-gray-100">
      <h1 className="font-bold text-center text-5xl mb-10">CRUD + HOOKS</h1>
    <UsersForm register={register} errors={errors} handleSubmit={handleSubmit} handleFormSubmit={handleFormSubmit}/>
    <UsersList users={users} handleDelete={handleDelete} handleUpdatingIndex={handleUpdatingIndex} />
    </div>
  )
}

export default App
