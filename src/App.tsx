import { FC, useCallback } from 'react'

import Button from 'Components/Button/Button'

import Notes from 'Constants/Notes'

import PlayAudio from 'Utils/PlayAudio'

import { INote } from 'Types/Types'

import { Container, AttributionContainer, ButtonContainer } from './AppStyles'

const App: FC = () => {
	const OnClickNote = useCallback((note: INote) => {
		PlayAudio(note)
	}, [])

	return (
		<Container>
			<AttributionContainer>
				Background by{' '}
				<a href='https://www.freepik.com/free-vector/flat-design-wood-texture-illustration_22628444.htm#query=cartoon%20wood%20texture&position=2&from_view=keyword&track=ais#position=2&query=cartoon%20wood%20texture'>
					Freepik
				</a>
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
