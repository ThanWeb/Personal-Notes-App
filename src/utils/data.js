let notes = [
    {
        id: 'notes-1',
        title: 'Babel',
        body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
        showed: true
    },
    {
        id: 'notes-2',
        title: 'Functional Component',
        body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
        showed: true
    },
    {
        id: 'notes-3',
        title: 'Modularization',
        body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
        showed: true
    },
    {
        id: 'notes-4',
        title: 'Lifecycle',
        body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
        showed: true
    },
    {
        id: 'notes-5',
        title: 'ESM',
        body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
        showed: true
    },
    {
        id: 'notes-6',
        title: 'Module Bundler',
        body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
        showed: true
    },
];

const getNotes = () => {
    return notes;
}


const addNote = ({title, body}) => {
    let now = new Date();
    notes.push(
        {
            id: `notes-${notes.length + 1}`,
            title,
            body,
            createdAt: `${now.toISOString()}`,
            archived: false,  
            showed: true          
        }
    )
}

const searchNote = (input) => {
    const tempNotes = [];
    notes.forEach((note) => {
        if((note.title.toLowerCase()).includes(input)){
            tempNotes.push(note)
        }
    });
    return tempNotes;
}

const archiveNote = (id) => {
    notes.forEach(note => {
        if(note.id === id)
            note.archived = true
    });
}

const unarchiveNote = (id) => {
    notes.forEach(note => {
        if(note.id === id)
            note.archived = false
    });
}

const deleteNote = (id) => {
    notes = notes.filter(note => note.id !== id);
    notes.forEach((note, index) => {
        note.id = index + 1;
    });
}

export { getNotes, addNote, searchNote, archiveNote, unarchiveNote, deleteNote };
