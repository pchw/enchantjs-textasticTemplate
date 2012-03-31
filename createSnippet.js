function enchantjsSnippet (argument) {/*
enchant();

window.onload = function(){
	var game = new Game(320, 320);
	game.fps = 30;
	game.time = 0;

	// overwrite loading scene
	var loadingScene = new Scene();
	loadingScene.backgroundColor = "white";
	loadingScene.addEventListener(Event.Event.PROGRESS, function(e){
		var progress = parseInt(e.loaded / e.total);
	});
	game.loadingScene = loadingScene;

	game.onload = function(){

	};

	game.addEventListener(Event.ENTER_FRAME, function(){
		game.time = parseInt(game.frame/game.fps);
	});

	game.start();
};
*/}

console.log(enchantjsSnippet.toString().replace(/\t/g, "\\t").replace(/\"/g, "\\\"").split(/\n/).slice(1, -1).join("\\n"));