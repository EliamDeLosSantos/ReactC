import { useEffect, useState } from "react"
import { mapUsersResponse } from "../helper/mapUsers"
// import usersMock from "../mocks/users.json"
import { useForm } from "react-hook-form"
import type { UserResponse, UserResponseFormData } from "../types"
import { deleteUsers, fetchUsers, insertUsers, updateUsers } from "../helper/fetchData"

export const UseUsersData = () => {
    const [users, setUsers] = useState<UserResponse[] | []>([])
    const [updatingUserId, setUpdatingUserId] = useState<number | null>(null)
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState<string | null>(null)
    const [apiError, setApiError] = useState<string | null>(null)
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<UserResponseFormData>()

    useEffect(() =>{
        const getUsers = async () =>{
            setLoading(true)
            setApiError(null)
            try {
                const users = await fetchUsers();
                setUsers(mapUsersResponse(users))
            } catch (e) {
                setApiError('Error al cargar usuarios')
            } finally {
                setLoading(false)
            }
        }
        getUsers()
    },[])

    const registerUser = async (data: UserResponseFormData) => {
        setLoading(true)
        setApiError(null)
        try {
            const postUsersResponse = await insertUsers(data);
            console.log(postUsersResponse);
            setNotification('Usuario creado correctamente')
        } catch (e) {
            setApiError('Error al crear usuario')
        } finally {
            setLoading(false)
            setTimeout(() => setNotification(null), 2000)
        }
    }

    async function handleDelete(id: number) {
        setLoading(true)
        setApiError(null)
        try {
            const deleteUsersResponse = await deleteUsers(id)
            console.log(deleteUsersResponse);
            setNotification('Usuario eliminado')
        } catch (e) {
            setApiError('Error al eliminar usuario')
        } finally {
            setLoading(false)
            setTimeout(() => setNotification(null), 2000)
        }
    }

    const handleFormSubmit = (data: UserResponseFormData) => {
        if (updatingUserId != null) {
            handleUpdate(data)
        } else {
            registerUser(data)
        }
        reset()
    }

    async function handleUpdate(data: UserResponseFormData) {
        if(!updatingUserId) return;
        setLoading(true)
        setApiError(null)
        try {
            const updateUsersResponse = await updateUsers(updatingUserId, data);
            console.log(updateUsersResponse);
            setNotification('Usuario actualizado')
        } catch (e) {
            setApiError('Error al actualizar usuario')
        } finally {
            setLoading(false)
            setTimeout(() => setNotification(null), 2000)
        }
    }

    const handleUpdatingIndex = (id: number) => {
        setUpdatingUserId(id)
        const updatingUser = users.find(user => user.id == id);
        if (!updatingUser) return;
        setValue('name', updatingUser.name)
        setValue('username', updatingUser.username)
        setValue('email', updatingUser.email)
        setValue('addressName', updatingUser.addressName)
        setValue('phone', updatingUser.phone)
        setValue('website', updatingUser.website)
        setValue('companyName', updatingUser.companyName)
    }

    return {
        users,
        errors,
        register,
        handleSubmit,
        handleDelete,
        handleFormSubmit,
        handleUpdatingIndex,
        loading,
        notification,
        apiError
    }
}