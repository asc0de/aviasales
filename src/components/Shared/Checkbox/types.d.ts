import React from 'react';

export type CheckboxProps = {
	checked: boolean;
	onClick?: (e: React.ChangeEvent<HTMLElement>) => void;
};