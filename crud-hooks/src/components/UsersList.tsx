import type { UserResponse } from "../types"

type UsersListProps = {
    users: UserResponse[],
    handleUpdatingIndex: (id: number) => void,
    handleDelete:(id: number) => void
    
}
export default function UsersList({users, handleUpdatingIndex, handleDelete}: UsersListProps) {
  return (
    <div>
              {
        users.length > 0 && (
          <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>adress</th>
              <th>phone</th>
              <th>website</th>
              <th>company</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => (
                <tr key={user.id}>
                  {
                    Object.entries(user).map(([key, value]) => (
                      <td key={key}>{value.toString()}</td>
                    ))
                  }
                  <td>
                    <button onClick={() => handleUpdatingIndex(user.id)} className="mb-5 mx-2 bg-blue-400 py-3 px-5 text-white font-medium rounded-lg">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(user.id)} className="mb-5 bg-red-600 py-3 px-5 text-white font-medium rounded-lg">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            }
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
        )
      }
      

    </div>
  )
};

