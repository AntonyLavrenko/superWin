import {Main} from "./main";

declare let window: any;

document.addEventListener('DOMContentLoaded', () => {
	window["app"] = new Main();
}, false);