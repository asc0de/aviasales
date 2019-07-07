export type RadioProps = {
	items: RadioItem[];
	value: string;
	onChange: (value: string) => void;
};

export type RadioItem = {
	label: string;
	value: string;
}