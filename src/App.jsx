import { CartProvider } from './context/CartContext';
import ParticlesBg from './components/ParticlesBg';
import UltraSmoke from './components/UltraSmoke';
import './styles.css';
import Shop from './components/Shop';
import Checkout from './components/Checkout';

export default function App() {
  return (
    <CartProvider>
      <ParticlesBg />
      <UltraSmoke />

      <div className="hero">
        <img src="/logo.png" width="120" alt="Logo" />

        <h1>Ultratech Hub</h1>

        <Shop />
        <Checkout />
      </div>
    </CartProvider>
  );
}