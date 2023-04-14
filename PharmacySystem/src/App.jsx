import { Outlet } from 'react-router-dom';
import { appRouter } from './Router';
import { Header } from './components/Header';


export const App = () => {
  return (
    <div>
			<Header />
			<Outlet />
      
		</div>
)};