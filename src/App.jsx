import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle';
import Home from './pages/Home/Home';
import Sobre from './pages/sobre/Sobre';
import Experiencia from './pages/experiencia/Experiencia';
import Projetos from './pages/projetos/Projetos';

const App = () => (
	<main>
		<GlobalStyle />
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Navigate to='/home' replace />} />
				<Route exact path='/*' element={<Navigate to='/home' replace />} />
				<Route path='/home' element={<Home />} />
				<Route path='/sobre' element={<Sobre />} />
				<Route path='/experiencia' element={<Experiencia />} />
				<Route path='/projetos' element={<Projetos />} />
			</Routes>
		</BrowserRouter>
	</main>
);

export default App;
