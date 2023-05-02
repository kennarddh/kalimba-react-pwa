import { FC } from 'react'

import { Container, AttributionContainer } from './AppStyles'

const App: FC = () => {
	return (
		<Container>
			<AttributionContainer>
				Background by{' '}
				<a href='https://www.freepik.com/free-vector/flat-design-wood-texture-illustration_22628444.htm#query=cartoon%20wood%20texture&position=2&from_view=keyword&track=ais#position=2&query=cartoon%20wood%20texture'>
					Freepik
				</a>
			</AttributionContainer>
		</Container>
	)
}

export default App
