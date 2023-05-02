import { FC } from 'react'

import Button from 'Components/Button/Button'

import { INote } from 'Types/Types'

import { Container, AttributionContainer, ButtonContainer } from './AppStyles'

const App: FC = () => {
	return (
		<Container>
			<AttributionContainer>
				Background by{' '}
				<a href='https://www.freepik.com/free-vector/flat-design-wood-texture-illustration_22628444.htm#query=cartoon%20wood%20texture&position=2&from_view=keyword&track=ais#position=2&query=cartoon%20wood%20texture'>
					Freepik
				</a>
			</AttributionContainer>
			<ButtonContainer>
				<Button dotAfterNumber={2} note={INote.C} />
			</ButtonContainer>
		</Container>
	)
}

export default App
