import { appRouter } from './Router';
import { Header } from './components/Header';


export const App = () => {
  return (
    <div>
			<appRouter />
      <Header />
		</div>
)};