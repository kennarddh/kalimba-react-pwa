import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	background-image: url('__PUBLIC_URL__/WoodBackground.jpg');
	background-repeat: no-repeat;
	background-size: cover;

	position: relative;

	display: flex;
	justify-content: center;
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
	width: clamp(80%, 85%, 95%);

	height: 100%;

	display: flex;
	justify-content: space-between;
`
