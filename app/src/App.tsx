import './styles/App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Advantages } from './pages/LandingPage/components/Advantages/Advantages';
import { ProductCard } from './components/ProductCard/ProductCard';

export const App = () => {
	return (
		<>
			<Header/>
			<Advantages/>
			<ProductCard/>
			<p>Hello world</p>
			<p>goodbye</p>
			<Footer/>
		</>
	);
};
