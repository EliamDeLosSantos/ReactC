import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Layout from './layouts/Layout'

//Mejora de performance para cuando usas varias paginas o react-router-dom
//Para que la web no descargue todas las paginas cuando aun no se va a ellas
const FavoritesPage = lazy(() => import('./pages/Favorites'));
const GenerateAI = lazy(() => import('./pages/GenerateAI'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<IndexPage />} index />
          <Route path='/favorites' element={
            <Suspense fallback="Cargando...">
              <FavoritesPage />
            </Suspense>
          } />
          <Route path='/generate-ai' element={
            <Suspense fallback="Cargando...">
              <GenerateAI />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

