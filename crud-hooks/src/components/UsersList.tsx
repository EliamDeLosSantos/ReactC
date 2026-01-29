import type { UserResponse } from "../types"
import Button from "./Button"

type UsersListProps = {
    users: UserResponse[],
    handleUpdatingIndex: (id: number) => void,
    handleDelete:(id: number) => void
}

export default function UsersList({users, handleUpdatingIndex, handleDelete}: UsersListProps) {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      {users.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow bg-white">
          <table className="min-w-full">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Usuario</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Dirección</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.addressName}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <Button type="button" className="bg-blue-500 hover:bg-blue-600" onClick={() => handleUpdatingIndex(user.id)}>Editar</Button>
                    <Button type="button" className="bg-red-600 hover:bg-red-700" onClick={() => handleDelete(user.id)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500">No hay usuarios para mostrar.</div>
      )}
    </div>
  )
};

