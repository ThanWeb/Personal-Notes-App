import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <div className="persnoal-notes-app">
            <header className='personal-notes-header'>
                <h1>Catat-AN's </h1>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ListPage />} />
                    <Route path="/archive" element={<ArchivePage />} />
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/404" element={<NotFoundPage />} />
                </Routes>
            </main>
            <footer className='personal-notes-footer'>
                
            </footer>
        </div>
    );
}



export default App;