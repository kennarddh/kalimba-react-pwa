import { INoteEnum } from 'Types/Types'

export interface IButton {
	note: INoteEnum
	octave: number
	onClick?: () => void
}
