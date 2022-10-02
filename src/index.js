import './styles/style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import PersonalNotesApp from './components/PersonalNotesApp.js';

const root = createRoot(document.getElementById('root'));
root.render(<PersonalNotesApp />);