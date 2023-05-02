import { INote } from 'Types/Types'

import AmplifyAudio from 'Utils/AmplifyAudio'

const PlayAudio = (note: INote) => {
	const audio = new Audio(note.file)

	AmplifyAudio(audio, 2)

	audio.play()
}

export default PlayAudio
