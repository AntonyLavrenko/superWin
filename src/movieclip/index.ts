import * as PIXI from "pixi.js";
let AnimatedSprite = PIXI.extras.AnimatedSprite;
let cached = PIXI.utils.TextureCache;

/**
 * Background movie
 */
export class BackgroundMovie extends AnimatedSprite {
	constructor () {
		super(Object.keys(cached).filter((e: string) => /back_\d{1,2}/.test(e)).map((e: string) => cached[e]));
	}
}
	