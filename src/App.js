import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPageWrapper from './pages/ListPage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Copyright from './components/Copyright';

function App() {
    return (
        <div className="personal-notes-app">
            <header className='personal-notes-header'>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ListPageWrapper />} />
                    <Route path="/archive" element={<ArchivePage />} />
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <footer className='personal-notes-footer'>
                <Copyright />
            </footer>
        </div>
    );
}



export default App;