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
        handleUpdatingIndex,
        loading,
        notification,
        apiError
      } = UseUsersData()

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <h1 className="font-bold text-center text-5xl mb-10 pt-8">CRUD + HOOKS</h1>
      {apiError && <div className="max-w-md mx-auto mb-4 p-3 bg-red-100 text-red-700 rounded">{apiError}</div>}
      <UsersForm register={register} errors={errors} handleSubmit={handleSubmit} handleFormSubmit={handleFormSubmit} loading={loading} notification={notification} />
      <UsersList users={users} handleDelete={handleDelete} handleUpdatingIndex={handleUpdatingIndex} />
    </div>
  )
}

export default App
