import * as PIXI from "pixi.js";

declare let document: any;

export class Stage {
	private renderer: any;
	private gameNodeID: string = "game";

	constructor () {
		this.renderer = PIXI.autoDetectRenderer(600, 400,
			{antialias: true, transparent: false, resolution: 1, backgroundColor: 0xFFFFFF}
		);

		document.getElementById(this.gameNodeID).appendChild(this.renderer.view)
	}
}