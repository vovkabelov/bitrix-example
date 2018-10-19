// @flow

import type {Button} from "./components/button/button";

export type PageDesignerOptions = {
	root: ?HTMLElement,
	title: string,
	buttons: Array<Button>
}

export type EventCallback = (event: MouseEvent) => void;

export type ButtonOptions = {
	text: string,
	onClick: EventCallback
};