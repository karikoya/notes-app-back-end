const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {}
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler, // Use getAllNotesHandler here
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler, // Correct handler name (getNoteByIdHandler)
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;
