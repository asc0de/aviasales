import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';

import styles from './styles.module.css';

import {TicketListDispatchProps, TicketListOwnProps, TicketListProps, TicketListStateProps} from './types';
import {Ticket} from '../../../../types/models';
import {CommonState} from '../../../../types/states';

import {TicketService} from '../../../../services';

import {setTickets, setTicketsFetchStatus} from '../../../../actions/ticket';

import {getSortedAndFilteredTickets, getTicketsCurrency, getTicketsFetchStatus} from '../../../../reducers/ticket';
import {getCurrencyRate} from '../../../../reducers/currency';

import {FetchStatus} from '../../../../enums/common';

import {isComplete, isError, isLoading} from '../../../../helpers';

import {Ticket as TicketComponent} from './Ticket';
import {FlexWrapper} from '../../../Shared/FlexWrapper';
import {Spinner} from '../../../Shared/Spinner';

const mapStateToProps: MapStateToProps<
	TicketListStateProps,
	TicketListOwnProps,
	CommonState
> = (state: CommonState) => ({
	tickets: getSortedAndFilteredTickets(state, 'price'),
	ticketsFetchStatus: getTicketsFetchStatus(state),
	rate: getCurrencyRate(state, getTicketsCurrency(state))
});

const mapDispatchToProps: MapDispatchToProps<TicketListDispatchProps, TicketListOwnProps> = (dispatch) =>
	bindActionCreators(
		{
			setTickets,
			setTicketsFetchStatus
		},
		dispatch
	);

/**
 * Список билетов
 */
export const TicketsList = connect(
	mapStateToProps,
	mapDispatchToProps
)((({
	setTickets,
	setTicketsFetchStatus,
	tickets,
	ticketsFetchStatus,
	rate
}) => {
	useEffect(() => {
		setTicketsFetchStatus(FetchStatus.Loading);
		TicketService.get().then((tickets) => {
			setTickets(tickets);
			setTicketsFetchStatus(FetchStatus.Complete);
		},() => setTicketsFetchStatus(FetchStatus.Error));
	}, [setTickets, setTicketsFetchStatus]);

	/**
	 * Строит список билетов
	 */
	const buildTicketList = (tickets: Ticket[]) =>
		tickets.map((ticket: Ticket, index: number) => (
			<TicketComponent
				key={index}
				ticket={ticket}
				rate={rate}
			/>
		));

	return (
		<FlexWrapper flexDirection="column" alignItems="stretch" className={styles['tickets-list']}>
			{isLoading(ticketsFetchStatus) && (
				<FlexWrapper alignItems="center" className={styles['loader-container']}>
					<Spinner />
				</FlexWrapper>
			)}
			{isError(ticketsFetchStatus) && <span>Извините, что-то пошло не так :/</span>}
			{isComplete(ticketsFetchStatus) && buildTicketList(tickets)}
		</FlexWrapper>
	)
}) as React.FC<TicketListProps>);