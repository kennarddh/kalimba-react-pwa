import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	background-image: url('/WoodBackground.jpg');
	background-repeat: no-repeat;
	background-size: cover;

	position: relative;
`

export const AttributionContainer = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;

	color: #fff;

	& a {
		color: #fff;
	}
`

export const ButtonContainer = styled.div`
	padding: 0 30px;

	width: 100%;

	height: 100%;
`
