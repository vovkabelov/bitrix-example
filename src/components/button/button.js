// @flow

import type {ButtonOptions} from '../../types';
import {create} from 'BX';
import './style.css';

export class Button {
	options: ButtonOptions;
	layout: HTMLElement;

	constructor(options: ButtonOptions) {
		this.options = options;
	}

	render(): HTMLElement {
		if (!this.layout) {
			let {text, onClick} = this.options;
			this.layout = create('button', {
				html: text,
				props: {className: 'button'},
				events: {click: onClick}
			});
		}

		return this.layout;
	}
}