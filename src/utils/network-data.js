const BASE_URL = 'https://notes-api.dicoding.dev/v1';

function getAccessToken() {
    return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
}

async function login({ email, password }) {
    showLoading();
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();
    hideLoading();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
    showLoading();
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();
    hideLoading();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function getUserLogged() {
    showLoading();
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();
    hideLoading();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function addNote({ title, body }) {
    showLoading();
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
    });

    const responseJson = await response.json();
    hideLoading();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getActiveNotes() {
    showLoading();
    const response = await fetchWithToken(`${BASE_URL}/notes`);
    const responseJson = await response.json();
    hideLoading();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }
    
    return { error: false, data: responseJson.data };
}

async function getArchivedNotes() {
    showLoading();
    const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
    const responseJson = await response.json();
    hideLoading();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }
 
    return { error: false, data: responseJson.data };
}

async function getNote(id) {
    showLoading();
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
    const responseJson = await response.json();
    hideLoading();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function archiveNote(id) {
    showLoading();
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
        method: 'POST',
    });
  
    const responseJson = await response.json();
    hideLoading();
  
    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }
  
    return { error: false, data: responseJson.data };
}

async function unarchiveNote(id) {
    showLoading();
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
        method: 'POST',
    });

    const responseJson = await response.json();
    hideLoading();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function deleteNote(id) {
    showLoading();
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
        method: 'DELETE',
    });

    const responseJson = await response.json();
    hideLoading();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

const showLoading = () => {
    if(document.querySelector('.personal-notes-app'))
        document.querySelector('.loading-alert').classList.remove('hidden');
}

const hideLoading = () => {
    if(document.querySelector('.personal-notes-app'))
        document.querySelector('.loading-alert').classList.add('hidden');
}

export {
    getAccessToken,
    putAccessToken,
    login,
    register,
    getUserLogged,
    addNote,
    getActiveNotes,
    getArchivedNotes,
    getNote,
    archiveNote,
    unarchiveNote,
    deleteNote,
};