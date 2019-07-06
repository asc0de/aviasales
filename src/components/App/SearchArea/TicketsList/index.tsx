import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';

import {TicketListDispatchProps, TicketListOwnProps, TicketListProps, TicketListStateProps} from './types';
import {Ticket} from '../../../../types/models';
import {CommonState} from '../../../../types/states';

import {TicketService} from '../../../../services';

import {setTickets, setTicketsFetchStatus} from '../../../../actions/ticket';

import {getSortedTickets, getTicketsFetchStatus} from '../../../../reducers/ticket';

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
	tickets: getSortedTickets(state),
	ticketsFetchStatus: getTicketsFetchStatus(state)
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
)((({setTickets, setTicketsFetchStatus, tickets, ticketsFetchStatus}) => {
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
		tickets.map((ticket: Ticket, index: number) => <TicketComponent ticket={ticket} key={index}/>);

	return (
		<FlexWrapper flexDirection="column">
			{isLoading(ticketsFetchStatus) && <Spinner />}
			{isError(ticketsFetchStatus) && <span>Извините, что-то пошло не так :/</span>}
			{isComplete(ticketsFetchStatus) && buildTicketList(tickets)}
		</FlexWrapper>
	)
}) as React.FC<TicketListProps>);