import { useEffect, useState } from "react"
import { mapUsersResponse } from "../helper/mapUsers"
// import usersMock from "../mocks/users.json"
import { useForm } from "react-hook-form"
import type { UserResponse, UserResponseFormData } from "../types"
import { deleteUsers, fetchUsers, insertUsers, updateUsers } from "../helper/fetchData"

export const UseUsersData = () => {
    const [users, setUsers] = useState<UserResponse[] | []>([])
    const [updatingUserId, setUpdatingUserId] = useState<number | null>(null)
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<UserResponseFormData>()

    useEffect(() =>{
        const getUsers = async () =>{
            const users = await fetchUsers();
            setUsers(mapUsersResponse(users))
        }
        getUsers()
    },[])

    const registerUser = async (data: UserResponseFormData) => {
        const postUsersResponse = await insertUsers(data);
        console.log(postUsersResponse);
        // const newUser: UserResponse = {
        //     id: users.length + 1, // Aberracion de la naturaleza T_T
        //     ...data
        // }
        // setUsers([...users, newUser])
    }

    async function handleDelete(id: number) {
        const deleteUsersResponse = await deleteUsers(id)
        console.log(deleteUsersResponse);
        // const filteredUsers = users.filter(user => user.id != id)
        // setUsers(filteredUsers)
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
        const updateUsersResponse = await updateUsers(updatingUserId, data);
        console.log(updateUsersResponse);
        // setUsers(users.map(user => user.id == updatingUserId ? { id: updatingUserId, ...data } : user))
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
        handleUpdatingIndex
    }
}