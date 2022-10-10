import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/HeaderApp';
import ListPage from './pages/ListPage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
// import PersonalNotesApp from './components/PersonalNotesApp';

function App() {
    return (
        <div className="personal-notes-app">
            <header className='personal-notes-header'>
                <Navigation />
            </header>
            <main>
                {/* <PersonalNotesApp /> */}
                <Routes>
                    <Route path="/" element={<ListPage />} />
                    <Route path="/archive" element={<ArchivePage />} />
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/404" element={<NotFoundPage />} />
                </Routes>
            </main>
            {/* <footer className='personal-notes-footer'>
                
            </footer> */}
        </div>
    );
}



export default App;