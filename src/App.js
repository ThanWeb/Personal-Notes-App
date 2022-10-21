import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import ArchivePage from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Copyright from './components/Copyright';
import { getUserLogged, putAccessToken } from './utils/network-data';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
    const navigate = useNavigate();
    const [authedUser, setAuthedUser] = React.useState(null);
    const [initialize, setInitialize] = React.useState(true);
    // const [language, toggleLanguage] = React.useState();
    const [theme, toggleTheme] = React.useState('');

    React.useEffect(() => {
        getLoginStatus();
        setInitialize(false);
        getTheme();
    }, []);

    const getTheme = () => {
        let currentTheme = localStorage.getItem('theme') || 'light';
        toggleTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    }

    const setTheme = () => {
        let prevTheme = localStorage.getItem('theme');
        let newTheme = prevTheme === 'light' ? 'dark' : 'light';
        toggleTheme(newTheme);
        localStorage.setItem('theme', newTheme)
    }

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
        navigate('/');
    }

    if (initialize) {
        return null;
    }

    if (authedUser === null) {
        return (
            <ThemeProvider value={theme}>
                <div className={theme === 'light' ? "personal-notes-app" : "personal-notes-app dark"}>
                    <header className={theme === 'light' ? "personal-notes-header" : "personal-notes-header dark"}>
                    </header>
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
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider value={theme}>
            <div className={theme === 'light' ? "personal-notes-app" : "personal-notes-app dark"}>
                <header className={theme === 'light' ? "personal-notes-header" : "personal-notes-header dark"}>
                    <Navigation logout={onLogout} setTheme={setTheme}/>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<ListPage />} />
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
        </ThemeProvider>
    );
}



export default App;