import React from 'react'
import { FormLogin } from '../../components/Login/Login';
import { HeaderHome } from '../../components/Header/HeaderHome';
import './Home.css';

export const Home = () => {
  return (
		<section>
			<HeaderHome/>
			<div className="home__container">
				<h3 className="home__title"> Login </h3>
				<FormLogin/>
			</div>
		</section>
  );
};