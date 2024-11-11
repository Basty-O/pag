import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Importa Routes y Route
import CoursesPage from '../pages/CoursesPage';  // Asegúrate de que la ruta sea correcta
import HomePage from '../pages/HomePage';        // Si tienes una página principal
// Importa otros componentes que quieras mostrar en las rutas

const Layout = () => {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <Routes>
        {/* Define las rutas */}
        <Route path="/" element={<HomePage />} />  {/* Página de inicio */}
        <Route path="/courses" element={<CoursesPage />} />  {/* Página de cursos */}
      </Routes>
    </div>
  );
}

export default Layout;
