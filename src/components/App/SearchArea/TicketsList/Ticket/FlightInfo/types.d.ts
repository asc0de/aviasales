import {FlightInfoAlign} from './config';

export type FlightInfoProps = {
	align: FlightInfoAlign;
	date: Date;
	time: string;
	city: string;
	cityName: string;
};