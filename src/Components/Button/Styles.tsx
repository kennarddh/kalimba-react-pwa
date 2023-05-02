import styled from 'styled-components'

export const Container = styled.button<{ $height: number }>`
	width: clamp(20px, 4%, 5%);

	height: ${({ $height }) => $height}%;

	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;

	border: none;

	background-color: #ddd;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

export const TextContainer = styled.div`
	background-color: #eee;

	width: 100%;
	height: 90px;

	padding: 10px 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;

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
