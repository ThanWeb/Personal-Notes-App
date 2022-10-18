import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPageWrapper from './pages/ListPage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Copyright from './components/Copyright';
import { getUserLogged, putAccessToken } from './utils/network-data';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
    const [authedUser, setAuthedUser] = React.useState(null);
    const [initialize, setInitialize] = React.useState(true);

    React.useEffect(() => {
        getLoginStatus();
        setInitialize(false);
    }, []);

    async function getLoginStatus() {
        const { data } = await getUserLogged();
        setAuthedUser(data);
    }

    async function onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        setAuthedUser(data);
    }

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken('');
    }

    if (initialize) {
        return null;
    }

    if (authedUser === null) {
        return (
            <div className="personal-notes-app">
                <main>
                    <Routes>
                        <Route path="/" element={<LoginPage loginSuccess={onLoginSuccess}/>} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </main>
                <footer className='personal-notes-footer'>
                    <Copyright />
                </footer>
            </div>
        );
    }

    return (
        <div className="personal-notes-app">
            <header className='personal-notes-header'>
                <Navigation logout={onLogout} />
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