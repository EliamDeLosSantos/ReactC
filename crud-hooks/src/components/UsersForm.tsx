import type { UserResponseFormData } from "../types"
import type { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"
type UsersFormProps = {
    handleSubmit: UseFormHandleSubmit<UserResponseFormData, UserResponseFormData>,
    handleFormSubmit:(data: UserResponseFormData) => void,
    register: UseFormRegister<UserResponseFormData>,
    errors: FieldErrors<UserResponseFormData>
}

export default function UsersForm({
handleSubmit,
handleFormSubmit,
register,
errors
}:UsersFormProps) {
  return (
          <div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5" action="POST">
          <div>
            <label>Nombre</label>
            <input
              id="name"
              placeholder="Nombre"
              {...register('name', {
                required: 'El nombre es requerido'
              })}/>
              {errors.name && (
                <p className="text-red-400">{errors.name.message}</p>
              )}
          </div>
          <div>
            <label>Usuario</label>
            <input placeholder="Usuario"
            {...register('username', {
                required: 'El nombre de usuario es requerido'
              })}/>
              {errors.username && (
                <p className="text-red-400">{errors.username.message}</p>
              )}
          </div>
          <div>
            <label>Email</label>
            <input placeholder="Email"
            {...register('email', {
                required: 'El email es requerido'
              })}/>
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}
          </div>
          <div>
            <label>Direccion</label>
            <input placeholder="Direccion"
            {...register('addressName', {
                required: 'El nombre es requerido'
              })}/>
              {errors.addressName && (
                <p className="text-red-400">{errors.addressName.message}</p>
              )}
          </div>
          <div>
            <label>Telefono</label>
            <input placeholder="809-785-2385"
            {...register('phone', {
                required: 'El telefono es requerido'
              })}/>
              {errors.phone && (
                <p className="text-red-400">{errors.phone.message}</p>
              )}
          </div>
          <div>
            <label>Sitio web</label>
            <input placeholder="unsitio.com"
            {...register('website', {
                required: 'El website es requerido'
              })}/>
              {errors.website && (
                <p className="text-red-400">{errors.website.message}</p>
              )}
          </div>
          <div>
            <label>Compañia</label>
            <input placeholder="Nombre la compañia"
            {...register('companyName', {
                required: 'El nombre de la empresa es requerido'
              })}/>
              {errors.companyName && (
                <p className="text-red-400">{errors.companyName.message}</p>
              )}
          </div>
          <div>
            <input type="submit" value={'Enviar'}/>
          </div>
        </form>
      </div>
  )
};

