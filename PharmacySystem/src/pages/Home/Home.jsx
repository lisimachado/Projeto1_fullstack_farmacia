import React from 'react'
import { FormLogin } from '../../components/Login/Login';

export const Home = () => {
  return (
    <div className="home__container">
			<h3 className="home__title"> Faça seu Login no Pharmacy System</h3>
			< FormLogin/>
    </div>
  );
};