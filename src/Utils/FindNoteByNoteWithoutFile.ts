import Notes from 'Constants/Notes'

import { INoteWithoutFile } from 'Types/Types'

const FindNoteByNoteWithoutFile = (note: INoteWithoutFile) => {
	return Notes.find(
		noteIter =>
			noteIter.octave === note.octave && noteIter.note === note.note
	)
}

export default FindNoteByNoteWithoutFile
