// @flow

import {Button} from './components/button/button';
import {PageDesigner} from "./components/page-designer/page-designer";
import './app.css';

const setPageColorAction = (color: string) => (event) => {
	event.preventDefault();
	void (document.body && document.body.style.setProperty('background-color', color));
};

const App = new PageDesigner({
	root: document.querySelector('.root'),
	title: 'Change page background',
	buttons: [
		new Button({
			text: 'Grey',
			onClick: setPageColorAction('#BDBDBD')
		}),
		new Button({
			text: 'Green',
			onClick: setPageColorAction('#C8E6C9')
		}),
		new Button({
			text: 'Blue',
			onClick: setPageColorAction('#80D8FF')
		}),
		new Button({
			text: 'Yellow',
			onClick: setPageColorAction('#FFFF8D')
		}),
		new Button({
			text: 'Orange',
			onClick: setPageColorAction('#FFE0B2')
		})
	]
});

export {
	PageDesigner,
	Button,
	App
}