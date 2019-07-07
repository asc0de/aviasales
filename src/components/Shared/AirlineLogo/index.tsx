import React from 'react';

import {AirlineLogoProps} from './types';

/**
 * Лого авиакомпании ;-)
 */
export const AirlineLogo: React.FC<AirlineLogoProps> = ({iata, height = 50, width = 150, className}) => (
	<img src={`https://pics.avs.io/${width}/${height}/${iata}.png`} alt={iata} className={className}/>
);