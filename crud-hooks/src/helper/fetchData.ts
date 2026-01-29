import type { User, UserResponseFormData } from "../types";

const API_URL = `https://jsonplaceholder.typicode.com/users`

export const fetchUsers = async ():Promise<User[]> => {
    const response = await fetch(API_URL);
    return await response.json();
}

export const insertUsers = async (formData: UserResponseFormData) => {
    const response = await fetch(API_URL,{
        method:"POST",
        body: JSON.stringify(formData)
    } )
    return await response.json();
}

export const deleteUsers = async (id: number) => {
    const response = await fetch(`${API_URL}/${id}`,{
        method:"DELETE",
    } )
    return await response.json();
}

export const updateUsers = async (id: number, formData:UserResponseFormData) => {
    const response = await fetch(`${API_URL}/${id}`,{
        method:"PUT",
        body: JSON.stringify(formData)
    } )
    return await response.json();
}
