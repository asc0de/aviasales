import {CommonProps} from '../../../types/common/CommonProps';

export type FlexWrapperProps = {
	flexDirection?: 'row' | 'column';
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
	justifyContent?: 'start' | 'center' | 'space-between' | 'space-around';
} & CommonProps;