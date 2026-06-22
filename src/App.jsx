import { Navigate, Route, Routes } from 'react-router-dom';
import LegacyPage from './components/LegacyPage.jsx';
import ProductDetail from './routes/ProductDetail.jsx';

const routes = {
  home: '/react-pages/home.html',
  collections: '/collection.html',
  products: '/products/Catalogue.html',
  inspiration: '/inspiration/references.html',
  professionals: '/for-professionals.html'
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LegacyPage source={routes.home} />} />
      <Route path="/collection" element={<LegacyPage source={routes.collections} />} />
      <Route path="/collection/*" element={<Navigate to="/collection" replace />} />
      <Route path="/products/Catalogue" element={<LegacyPage source={routes.products} />} />
      <Route path="/products/catalogue" element={<Navigate to="/products/Catalogue" replace />} />
      <Route path="/products/catalogue/*" element={<Navigate to="/products/Catalogue" replace />} />
      <Route path="/products/detail/*" element={<ProductDetail />} />
      <Route path="/inspiration/references" element={<LegacyPage source={routes.inspiration} />} />
      <Route path="/inspiration/*" element={<Navigate to="/inspiration/references" replace />} />
      <Route path="/for-professionals" element={<LegacyPage source={routes.professionals} />} />
      <Route path="/for-professionals/*" element={<Navigate to="/for-professionals" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
