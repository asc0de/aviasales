import {ClientFilter} from '../../../../../../types/common';
import {Ticket} from '../../../../../../types/models';

export type HopFilterProps = {
	label: string;
	checked: boolean;
	filter: ClientFilter<Ticket>;
	onAdd: (filter: ClientFilter<Ticket>, force: boolean) => void;
	onRemove: (filter: ClientFilter<Ticket>) => void;
};