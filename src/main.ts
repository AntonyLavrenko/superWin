import {StageManager} from "./stage";
import "./styles/main.css";
import {BackgroundMovie} from "./movieclip/index";
import {Loader} from "./loader";

/**
 * Main class
 */
export class Main {
	public stageManager: StageManager;
	private movieClip: any;
	private loader: Loader;

	constructor () {
		this.stageManager = new StageManager();
		this.loader = new Loader();

		this.subscriberBtn();
		this.init();
	}

	subscriberBtn (): void {
		document.getElementById("start").addEventListener("click", () => {
			if (!this.movieClip) return;
			this.movieClip.gotoAndPlay(0);
		}, true);

		document.getElementById("resume").addEventListener("click", () => {
			if (!this.movieClip) return;
			if (this.movieClip.playing === true) {
				this.movieClip.stop();
			} else {
				this.movieClip.gotoAndPlay(this.movieClip.currentFrame);
			}
		}, true);
	}

	init (): void {
		this.loader.loadAtlases(["back_animation-1", "back_animation-2"])
			.then(() => {
				this.movieClip = this.stageManager.stage.addChild(new BackgroundMovie());
			});
	}
}

