import { nanoid } from 'nanoid';
import notes from './notes';

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toString();
    const updatedAt = createdAt;

    const newNotes = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNotes);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'catatan berhasil ditambahkan',
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }
};

export default { addNoteHandler };
