import React from 'react';
import {bindActionCreators} from 'redux';
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';

import {HopFiltersDispatchProps, HopFiltersOwnProps, HopFiltersProps, HopFiltersStateProps} from './types';
import {CommonState} from '../../../../../types/states';
import {ClientFilter} from '../../../../../types/common';
import {Ticket} from '../../../../../types/models';

import {ALL_HOP_FILTER_ITEM, ALL_HOP_FILTER_ITEMS_VALUE, HOP_FILTERS_ITEMS} from './config';

import {addTicketsFilters, removeTicketFilters, setTicketsFilters} from '../../../../../actions/ticket';
import {getTicketFilters} from '../../../../../reducers/ticket';

import {FlexWrapper} from '../../../../Shared/FlexWrapper';
import {HopFilter} from './HopFilter';

const mapStateToProps: MapStateToProps<
	HopFiltersStateProps,
	HopFiltersOwnProps,
	CommonState
> = (state: CommonState) => ({
	filters: getTicketFilters(state)
});

const mapDispatchToProps: MapDispatchToProps<
	HopFiltersDispatchProps,
	HopFiltersOwnProps
> = (dispatch) =>
	bindActionCreators(
		{
			setTicketsFilters,
			addTicketsFilters,
			removeTicketFilter: removeTicketFilters
		},
		dispatch
	);

/**
 * Фильтры пересадок с карточки настроек поиска
 */
export const HopFilters = connect(
	mapStateToProps,
	mapDispatchToProps
)((({addTicketsFilters, setTicketsFilters, removeTicketFilter, filters}) => {
	/**
	 * Проверяет добавлен ли текущий фильтр
	 */
	const isIncludesFilter = (
		{field: searchField, value: searchValue}: ClientFilter<Ticket>
	): boolean => {
		const foundFilter = filters.find(
			({field, value}: ClientFilter<Ticket>) => field === searchField && value === searchValue
		);

		return !!foundFilter;
	};

	/**
	 * Обработчик добавления фильтра
	 */
	const onAddFilter = (filter: ClientFilter<Ticket>, force: boolean) => {
		if (filter.value === ALL_HOP_FILTER_ITEMS_VALUE) {
			const filters = [...HOP_FILTERS_ITEMS.map(({filter}) => filter), filter];
			setTicketsFilters(filters);
			return;
		}

		force ? setTicketsFilters([filter]): addTicketsFilters([filter])
	};

	/**
	 * Обработчик удаления фильтра
	 */
	const onRemoveFilter = (filter: ClientFilter<Ticket>) => {
		if (filter.value === ALL_HOP_FILTER_ITEMS_VALUE) {
			setTicketsFilters([]);
			return;
		}
		removeTicketFilter([filter, ALL_HOP_FILTER_ITEM]);
	};

	/**
	 * Строит список фильтров по пересадкам
	 */
	const buildCheckboxFiltersList = (): React.ReactNode[] => {
		return HOP_FILTERS_ITEMS.map(({label, filter}) => (
			<HopFilter
				key={filter.value as string}
				label={label}
				filter={filter}
				checked={isIncludesFilter(filter)}
				onAdd={onAddFilter}
				onRemove={onRemoveFilter}
			/>
		))
	};
	
	return (
		<FlexWrapper flexDirection="column" alignItems="stretch">
			{buildCheckboxFiltersList()}
		</FlexWrapper>
	);
}) as React.FC<HopFiltersProps>);
