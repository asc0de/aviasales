import React from 'react';

import {FlexWrapperProps} from './types';

/**
 * Компонента-враппер для позиционирования чайлдов через Flex API
 */
export const FlexWrapper: React.FC<FlexWrapperProps> = (
	{
		flexDirection = 'row',
		alignItems = 'center',
		justifyContent = 'center',
		className,
		children
	}
) => (
	<div
		style={{
			display: 'flex',
			flexDirection,
			alignItems,
			justifyContent,
		}}
		className={className}
	>{children}</div>
);