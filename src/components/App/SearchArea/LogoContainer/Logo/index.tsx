import React from 'react';
import LogoSvg from './Assets/Logo.svg';

/**
 * Компонента, отображающая svg лого
 */
export const Logo: React.FC = () => (
	<img src={LogoSvg} alt="logo" />
);