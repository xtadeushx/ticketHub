import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home.page';
interface AppProps {
  // Define your props here
}

export const App: FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}