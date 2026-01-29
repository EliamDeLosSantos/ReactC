import type { UserResponseFormData } from "../types"
import type { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"
import InputField from "./InputField"
import Button from "./Button"

type UsersFormProps = {
    handleSubmit: UseFormHandleSubmit<UserResponseFormData, UserResponseFormData>,
    handleFormSubmit:(data: UserResponseFormData) => void,
    register: UseFormRegister<UserResponseFormData>,
    errors: FieldErrors<UserResponseFormData>,
    loading?: boolean,
    notification?: string | null
}

export default function UsersForm({
handleSubmit,
handleFormSubmit,
register,
errors,
loading = false,
notification = null
}:UsersFormProps) {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-6">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4" noValidate>
        <InputField id="name" label="Nombre" placeholder="Nombre" error={errors.name?.message} {...register('name', { required: 'El nombre es requerido', minLength: { value: 2, message: 'Mínimo 2 caracteres' } })} />
        <InputField id="username" label="Usuario" placeholder="Usuario" error={errors.username?.message} {...register('username', { required: 'El nombre de usuario es requerido', minLength: { value: 2, message: 'Mínimo 2 caracteres' } })} />
        <InputField id="email" label="Email" placeholder="Email" type="email" error={errors.email?.message} {...register('email', { required: 'El email es requerido', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'El email no es válido' } })} />
        <InputField id="addressName" label="Dirección" placeholder="Dirección" error={errors.addressName?.message} {...register('addressName', { required: 'La dirección es requerida' })} />
        <InputField id="phone" label="Teléfono" placeholder="809-785-2385" error={errors.phone?.message} {...register('phone', { required: 'El teléfono es requerido' })} />
        <InputField id="website" label="Sitio web" placeholder="unsitio.com" error={errors.website?.message} {...register('website', { required: 'El website es requerido' })} />
        <InputField id="companyName" label="Compañía" placeholder="Nombre de la compañía" error={errors.companyName?.message} {...register('companyName', { required: 'El nombre de la empresa es requerido' })} />

        {notification && <div className="text-green-600 text-sm">{notification}</div>}

        <div>
          <Button type="submit" loading={loading} className="w-full">{loading ? 'Guardando...' : 'Guardar Usuario'}</Button>
        </div>
      </form>
    </div>
  )
};

