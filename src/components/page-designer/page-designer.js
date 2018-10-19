// @flow

import type {PageDesignerOptions} from '../../types';
import {Button} from '../button/button';
import {create} from 'BX';
import './style.css';

export class PageDesigner {
	layout: HTMLElement;
	title: HTMLElement;
	buttonsContainer: HTMLElement;

	constructor(options: PageDesignerOptions) {
		this.title = create('h1', {props: {className: 'title'}});
		this.buttonsContainer = create('div', {props: {className: 'buttons-container'}});
		this.layout = create('div', {
			props: {className: 'page-designer'},
			children: [this.title, this.buttonsContainer]
		});

		void (options.root && options.root.appendChild(this.layout));

		this.setTitle(options.title);
		this.setButton(options.buttons);
	}

	setTitle(title: string) {
		this.title.innerText = title;
	}

	setButton(button: Button|Array<Button>) {
		if (Array.isArray(button)) {
			return button.forEach(this.setButton, this);
		}

		this.buttonsContainer.appendChild(button.render());
	}
}