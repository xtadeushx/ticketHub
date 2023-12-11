import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home.page';
import { Provider } from 'react-redux';
import { store } from './store';
interface AppProps {
  // Define your props here
}

export const App: FC<AppProps> = () => {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}