import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'

import { ThemeProvider } from '@/providers/theme/ThemeProvider'

import { store } from '@/store'

import { Layout } from './components/Layout'
import './index.css'
import { Home } from './pages/home/Home'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path='/' element={<Home />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	</StrictMode>
)
