import './styles/App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Advantages } from './pages/LandingPage/components/Advantages/Advantages';

export const App = () => {
	return (
		<>
			<Header/>
			<Advantages/>
			<p>Hello world</p>
			<p>goodbye</p>
			<Footer/>
		</>
	);
};
