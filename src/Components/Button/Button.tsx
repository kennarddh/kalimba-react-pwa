/* eslint-disable security/detect-object-injection */
import { FC } from 'react'

import NoteToNumberMap from 'Constants/NoteToNumberMap'

import { Container, TextContainer, StyledNumber } from './Styles'

import { IButton } from './Types'

const Button: FC<IButton> = ({ note, octave }) => {
	return (
		<Container
			$height={70 + (NoteToNumberMap[note] + (octave - 3) * 7 - 7) * -2.5}
		>
			<TextContainer>
				<p>{note}</p>
				<StyledNumber>
					{Array(octave - 4)
						.fill(null)
						.map((_, index) => (
							<p key={index}>•</p>
						))}
					<p>{NoteToNumberMap[note]}</p>
				</StyledNumber>
			</TextContainer>
		</Container>
	)
}

export default Button
