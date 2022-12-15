import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import Reveal from "reveal.js";

const deck = new Reveal();
deck.initialize({
	controls: false,
	progress: false,
	transition: "none",
	hideCursorTime: 0
});

Reveal.sync();
