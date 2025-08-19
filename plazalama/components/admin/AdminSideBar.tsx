const adminNavigation = [
    {url: '/admin/orders', text: 'Ordenes', blank: false},
    {url: '/admin/product', text: 'Productos', blank: false},
    {url: '/admin/cafe', text: 'Ver Tienda', blank: true},
]
export default function AdminSideBar () {
  return (
    <>
      <div className="space-y-3">
        <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">
            Navegacion
        </p>
        <nav className="flex flex-col">

        </nav>
      </div>
    </>
  )
};

