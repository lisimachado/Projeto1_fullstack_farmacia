import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { FarmaciasProvider } from './components/Context/ContextFarmacias';


export const App = () => {
	return (
		<FarmaciasProvider>
			<div>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</FarmaciasProvider>
	);
};





// //VERSÃO QUE FUNCIONA
// import { Outlet } from 'react-router-dom';
// import { Header } from './components/Header/Header';
// import { Footer } from './components/Footer/Footer';


// export const App = () => {
// 	return (
// 		<div>
// 			<Header />
// 			<Outlet />
// 			<Footer />

// 		</div>
// 	)
// };