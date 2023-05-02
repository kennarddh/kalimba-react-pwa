import styled from 'styled-components'

export const Container = styled.button<{ $height: number }>`
	width: clamp(20px, 4%, 5%);

	height: ${({ $height }) => $height}%;

	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;

	border: none;

	background: linear-gradient(to top, #eee 90px, #ddd 90px);

	display: flex;
	justify-content: center;
	align-items: flex-end;

	padding: 10px 0;
`

export const TextContainer = styled.div`
	& p {
		font-size: 20px;
	}
`

export const StyledNumber = styled.div`
	line-height: 0.7;

	height: 45px;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`
