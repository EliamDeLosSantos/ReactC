import AdminRoute from "./AdminRoute"

const adminNavigation = [
    {url: '/admin/order', text: 'Ordenes', blank: false},
    {url: '/admin/products', text: 'Productos', blank: false},
    {url: '/order/cafe', text: 'Ver Tienda', blank: true},
]
export default function AdminSideBar () {
  return (
    <>
      <div className="space-y-3">
        <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">
            Navegacion
        </p>
        <nav className="flex flex-col">
          {
            adminNavigation.map(link => (
              <AdminRoute key={link.text} link={link}/>
            ))
          }
        </nav>
      </div>
    </>
  )
};

