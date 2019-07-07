import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';

import styles from './styles.module.css';

import {CurrencyRadioDispatchProps, CurrencyRadioOwnProps, CurrencyRadioProps, CurrencyRadioStateProps} from './types';
import {CommonState} from '../../../../../types/states';

import {setTicketsCurrency} from '../../../../../actions/ticket';
import {setCurrenciesMap, setCurrencyFetchStatus} from '../../../../../actions/currency';

import {getTicketsCurrency} from '../../../../../reducers/ticket';
import {getCurrencyFetchStatus} from '../../../../../reducers/currency';

import {Currency, FetchStatus} from '../../../../../enums/common';
import {CURRENCY_ITEMS} from './config';

import {isComplete, isError, isLoading, isInitial} from '../../../../../helpers';

import {Radio} from '../../../../Shared/Radio';
import {CurrencyService} from '../../../../../services/currency';
import {Spinner} from '../../../../Shared/Spinner';
import {SpinnerSize} from '../../../../Shared/Spinner/config';
import {FlexWrapper} from '../../../../Shared/FlexWrapper';

const mapStateToProps: MapStateToProps<
	CurrencyRadioStateProps,
	CurrencyRadioOwnProps,
	CommonState
> = (state: CommonState) => ({
	ticketsCurrency: getTicketsCurrency(state),
	currenciesFetchStatus: getCurrencyFetchStatus(state)
});

const mapDispatchToProps: MapDispatchToProps<
	CurrencyRadioDispatchProps,
	CurrencyRadioOwnProps
> = (dispatch) =>
	bindActionCreators(
		{
			setTicketsCurrency,
			setCurrenciesMap,
			setCurrencyFetchStatus
		},
		dispatch
	);

/**
 * Радио баттон выбора валюты
 */
export const CurrencyRadio = connect(
	mapStateToProps,
	mapDispatchToProps
)((({
	setTicketsCurrency,
	setCurrenciesMap,
	setCurrencyFetchStatus,
	currenciesFetchStatus,
	ticketsCurrency
}) => {
	useEffect(() => {
		// Не делать запрос за данными, в случае, когда где-либо данные словаря уже запрошены
		if (isInitial(currenciesFetchStatus)) {
			setCurrencyFetchStatus(FetchStatus.Loading);
			CurrencyService.get().then(
				(currencies) => {
					setCurrenciesMap(currencies);
					setCurrencyFetchStatus(FetchStatus.Complete);
				},
				() => setCurrencyFetchStatus(FetchStatus.Error)
			);
		}
	}, [setCurrenciesMap, setCurrencyFetchStatus, currenciesFetchStatus]);

	/**
	 * Обработчик изменения радиобаттона валют
	 */
	const onChangeRadio = (currency: string) => setTicketsCurrency(currency as Currency);

	return (
		<FlexWrapper className={styles['currency-radio-container']}>
			{isLoading(currenciesFetchStatus) && <Spinner size={SpinnerSize.S}/>}
			{isError(currenciesFetchStatus) && <div>Что-то пошло не так :/</div>}
			{isComplete(currenciesFetchStatus) && <Radio
				items={CURRENCY_ITEMS}
				onChange={onChangeRadio}
				value={ticketsCurrency}
			/>}
		</FlexWrapper>
	);
}) as React.FC<CurrencyRadioProps>);