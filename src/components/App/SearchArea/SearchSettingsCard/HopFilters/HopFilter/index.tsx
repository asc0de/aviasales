import React from 'react';

import styles from './styles.module.css';

import {HopFilterProps} from './types';

import {ALL_HOP_FILTER_ITEMS_VALUE} from '../config';

import {Checkbox} from '../../../../../Shared/Checkbox';
import {FlexWrapper} from '../../../../../Shared/FlexWrapper';

/**
 * Фильтр на пересадку
 */
export const HopFilter: React.FC<HopFilterProps> = ({filter, checked, label, onAdd, onRemove}) => {
	/**
	 * Обработчик клика по лейблу и чекбоксу
	 */
	const onFilterClick = (
		e: React.MouseEvent<HTMLDivElement> | React.ChangeEvent<HTMLElement>,
		force: boolean = false
	) => {
		e.preventDefault();
		e.stopPropagation();

		if (force) {
			onAdd(filter, force);
			return;
		}
		checked ? onRemove(filter) : onAdd(filter, force);
	};

	const isAllFiltersValue = filter.value === ALL_HOP_FILTER_ITEMS_VALUE;

	return (
		<div className={styles['hop-filter']} onClick={(e) => onFilterClick(e)}>
			<Checkbox checked={checked} onClick={(e) => onFilterClick(e)}/>
			<FlexWrapper justifyContent="space-between" className={styles['text-container']}>
				<span>{label}</span>
				{!isAllFiltersValue && <div
					className={styles['only-action']}
					onClick={(e) => onFilterClick(e, true)}
				>
					Только
				</div>}
			</FlexWrapper>
		</div>
	);
};