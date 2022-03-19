import React from 'react'
import './App.css'
import NavBar from './NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './Home/Home'
import AboutPage from './About/About'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</div>

	)
}

export default App
