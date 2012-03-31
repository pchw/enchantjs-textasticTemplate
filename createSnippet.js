function enchantjsSnippet () {/*
enchant();

window.onload = function(){
	var game = new Game(320, 320);
	game.fps = 30;
	game.time = 0;

	// overwrite loading scene
	var loadingScene = new Scene();
	loadingScene.backgroundColor = "white";
	loadingScene.addEventListener(Event.PROGRESS, function(e){
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

function htmlSnippet () {/*
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no"> 
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="format-detection" content="telephone=no" />
	<script type="text/javascript" src="./enchant.js"></script>
	<script type="text/javascript" src="./main.js"></script>
	<style type="text/css">
		body { margin: 0; padding: 0; }
	</style>
</head>
<body>
</body>
</html>
*/}

function formatHereDoc (str) {
	return str.replace(/\t/g, "\\t").replace(/\"/g, "\\\"").split(/\n/).slice(1, -1).join("\\n");
}


console.log(formatHereDoc(enchantjsSnippet.toString()));
console.log(formatHereDoc(htmlSnippet.toString()));