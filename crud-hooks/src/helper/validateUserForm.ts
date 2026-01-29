export function validateUserForm(values: { name?: string; username?: string; email?: string; addressName?: string }) {
  const errors: Record<string, string> = {};
  if (!values.name) errors.name = 'El nombre es requerido';
  if (!values.username) errors.username = 'El nombre de usuario es requerido';
  if (!values.email) errors.email = 'El email es requerido';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errors.email = 'El email no es válido';
  if (!values.addressName) errors.addressName = 'La dirección es requerida';
  return errors;
}
