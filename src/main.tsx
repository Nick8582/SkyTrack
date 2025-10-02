import { StrictMode } from 'react'

import { domAnimation, LazyMotion } from 'motion/react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'

import { CenterLayout } from '@/components/CenterLayout'
import { Layout } from '@/components/Layout'

import { Favorites } from '@/pages/favorites/Favorites'
import { Home } from '@/pages/home/Home'

import { ThemeProvider } from '@/providers/theme/ThemeProvider'

import { store } from '@/store'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<LazyMotion features={domAnimation}>
				<Provider store={store}>
					<BrowserRouter>
						<Routes>
							<Route element={<Layout />}>
								<Route path='/' element={<Home />} />
								<Route element={<CenterLayout />}>
									<Route path='/favorites' element={<Favorites />} />
								</Route>
							</Route>
						</Routes>
					</BrowserRouter>
				</Provider>
			</LazyMotion>
		</ThemeProvider>
	</StrictMode>
)
