import { FC, useCallback, useEffect, useState, useRef } from 'react'

import Button from 'Components/Button/Button'

import Notes from 'Constants/Notes'

import FindNoteByNoteWithoutFile from 'Utils/FindNoteByNoteWithoutFile'

import { INote, INoteEnum, INoteShortcut } from 'Types/Types'

import { Container, AttributionContainer, ButtonContainer } from './AppStyles'

const App: FC = () => {
	const [NoteShortcut] = useState<INoteShortcut>({
		a: { note: INoteEnum.C, octave: 5 },
		s: { note: INoteEnum.A, octave: 4 },
		d: { note: INoteEnum.F, octave: 4 },
		f: { note: INoteEnum.D, octave: 4 },
		j: { note: INoteEnum.C, octave: 4 },
		k: { note: INoteEnum.E, octave: 4 },
		l: { note: INoteEnum.G, octave: 4 },
		';': { note: INoteEnum.B, octave: 4 },
	})

	const AudioRefs = useRef<Record<string, HTMLAudioElement | null>>({})

	const PlayAudio = useCallback((note: INote) => {
		const audio =
			AudioRefs.current[`${note.note}-${note.octave}-${note.file}`]
		if (!audio) return

		audio.currentTime = 0
		audio.play()
	}, [])

	const OnClickNote = useCallback((note: INote) => {
		PlayAudio(note)
	}, [])

	const OnKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (!Object.keys(NoteShortcut).includes(event.key)) return

			const note = FindNoteByNoteWithoutFile(NoteShortcut[event.key])

			if (!note) return

			PlayAudio(note)
		},
		[NoteShortcut]
	)

	useEffect(() => {
		addEventListener('keydown', OnKeyDown)

		return () => removeEventListener('keydown', OnKeyDown)
	}, [OnKeyDown])

	return (
		<Container>
			{Notes.map(note => (
				<audio
					src={note.file}
					key={`${note.note}-${note.octave}-${note.file}`}
					ref={el => {
						AudioRefs.current[
							`${note.note}-${note.octave}-${note.file}`
						] = el
					}}
				></audio>
			))}
			<AttributionContainer>
				<p>
					Background by{' '}
					<a href='https://www.freepik.com/free-vector/flat-design-wood-texture-illustration_22628444.htm#query=cartoon%20wood%20texture&position=2&from_view=keyword&track=ais#position=2&query=cartoon%20wood%20texture'>
						Freepik
					</a>
				</p>
				<p>
					<a
						href='https://www.flaticon.com/free-icons/kalimba'
						title='kalimba icons'
					>
						Kalimba icons created by Freepik - Flaticon
					</a>
				</p>
			</AttributionContainer>
			<ButtonContainer>
				{Notes.map(note => (
					<Button
						key={`${note.note}${note.octave}`}
						octave={note.octave}
						note={note.note}
						onClick={() => OnClickNote(note)}
					/>
				))}
			</ButtonContainer>
		</Container>
	)
}

export default App
