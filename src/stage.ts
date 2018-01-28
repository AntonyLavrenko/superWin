import * as PIXI from "pixi.js";

declare let document: any;

export class StageManager {
	private renderer: any;
	public stage: any;
	private gameNodeID: string = "game";

	constructor () {
		this.renderer = PIXI.autoDetectRenderer(600, 400,
			{antialias: true, transparent: false, resolution: 1, backgroundColor: 0xFFFFFF}
		);

		document.getElementById(this.gameNodeID).appendChild(this.renderer.view)

		this.stage = new PIXI.Container();

		PIXI.ticker.shared.speed = 0.5;
		PIXI.ticker.shared.add((time) => this.renderUpdate());
	}

	/**
	 * Update stage
	 */
	private renderUpdate (): void {
		if (!this.renderer || !this.stage) return;
		this.renderer.render(this.stage);
	}
}