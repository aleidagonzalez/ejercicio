//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

ReactDOM.render(<Home />, document.querySelector("#app"));

window.onload = function() {
	console.log("Hello Rigo from the console!");
};

document.addEventListener("DOMContentLoaded", function(event) {
	alert("DOM está preparado");
});

window.addEventListener("load", function(event) {
	alert("Página cargada al completo");
});

let welcome = document.getElementById("hola");
welcome.addEventListener("click", function(event) {
	event.target.innerText = "Vamos a divertirnos";
});
