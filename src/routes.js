import addNoteHandler, {getAllNotesHandler} from './handler.js';

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },

];

export default routes;
