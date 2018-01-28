"use strict";
var PIXI = require("pixi.js");
var Stage = (function () {
    function Stage() {
        this.gameNodeID = "game";
        this.renderer = PIXI.autoDetectRenderer(600, 400, { antialias: true, transparent: false, resolution: 1, backgroundColor: 0xFFFFFF });
        document.getElementById(this.gameNodeID).appendChild(this.renderer.view);
    }
    return Stage;
}());
exports.Stage = Stage;
//# sourceMappingURL=stage.js.map