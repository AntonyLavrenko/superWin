import * as PIXI from "pixi.js";

declare let Promise: any;

export class Loader {
	private path: string = "./assets/";

	loadAtlases (list: string[]): Promise<any> {
		let loader = new PIXI.loaders.Loader();

		let def: any = Loader.deferred();

		for (let i = 0, l = list.length; i < l; i++) {
			loader.add(list[i], `${this.path}${list[i]}.json`);
		}

		loader.once("error", (e) => def.reject(e));
		loader.load(() => def.resolve());

		return def.promise;
	}

	/**
	 * Get deferred
	 * @returns {Def}
	 */
	static deferred () {
		class Def {
			resolve: any;
			reject: any;
			promise: any;

			constructor () {
				this.promise = new Promise((res: any, rej: any) => {
					this.resolve = res;
					this.reject = rej;
				});
			}
		}

		return new Def();
	}
}