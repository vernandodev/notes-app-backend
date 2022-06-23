import addNoteHandler from './handler.js';

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {
            cors: {
              origin: ['*'],
            },
          },
    },
];

export default routes;
