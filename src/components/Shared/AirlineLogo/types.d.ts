import {CommonProps} from '../../../types/common';

export type AirlineLogoProps = {
	iata: string;
	height?: number;
	width?: number;
} & CommonProps;