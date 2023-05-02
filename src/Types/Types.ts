export enum INoteEnum {
	'A' = 'A',
	'B' = 'B',
	'C' = 'C',
	'D' = 'D',
	'E' = 'E',
	'F' = 'F',
	'G' = 'G',
}

export interface INote {
	note: INoteEnum
	octave: number
	file: string
}
