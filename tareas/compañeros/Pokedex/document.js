function Pokemon(n,v,a,t,d)
{
	
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.tipo = t;
	this.debilidad = d;

};



function pikachu()
{
	var pikachu = new Pokemon("Pikachu", 60, 40, "Eléctrico", "Tierra");
	var img = new Image ();

	nombrePokemon.innerText = pikachu.nombre;
	datosPokemon.innerText = "Vida: " + pikachu.vida + "\n" +
	"Ataque: " + pikachu.ataque + "\n" +
	"Tipo: " + pikachu.tipo + "\n" + 
	"Debilidad: " + pikachu.debilidad;
	fotoPokemon.src ="img/pika.png";
	sonido.src ="audio/pika.mp3";


};

function charmander()
{
	var charmander = new Pokemon("Charmander", 50, 30, "Fuego", "Agua");
	var img = new Image ();
	nombrePokemon.innerText = charmander.nombre;
	datosPokemon.innerText = "Vida: " + charmander.vida + "\n" +
	"Ataque: " + charmander.ataque + "\n" +
	"Tipo: " + charmander.tipo + "\n" + 
	"Debilidad: " + charmander.debilidad;
	fotoPokemon.src ="img/char.png";
	sonido.src ="audio/char.mp3";

};

function squirtle()
{
	var squirtle = new Pokemon("Squirtle", 70, 25, "Agua", "Planta");
	var img = new Image ();
	nombrePokemon.innerText = squirtle.nombre;
	datosPokemon.innerText = "Vida: " + squirtle.vida + "\n" +
	"Ataque: " + squirtle.ataque + "\n" +
	"Tipo: " + squirtle.tipo + "\n" + 
	"Debilidad: " + squirtle.debilidad;
	fotoPokemon.src ="img/squir.png";
	sonido.src ="audio/squir.mp3";   

};

function baulbasaur()
{
	var baulbasaur = new Pokemon("Bulbasaur", 40, 35, "Planta", "Fuego");
	var img = new Image ();
	nombrePokemon.innerText = baulbasaur.nombre;
	datosPokemon.innerText = "Vida: " + baulbasaur.vida + "\n" +
	"Ataque: " + baulbasaur.ataque + "\n" +
	"Tipo: " + baulbasaur.tipo + "\n" + 
	"Debilidad: " + baulbasaur.debilidad;
	fotoPokemon.src ="img/baulb.png";  
	sonido.src ="audio/baulb.mp3"; 

};

function mostrar(){
			document.getElementById('nombrePokemon').style.display = 'block';
			document.getElementById('datosPokemon').style.display = 'block';
			document.getElementById('botonGrito').style.display = 'block';

		}

function ocultar(){
			document.getElementById('inicio').style.display = 'none';
			

		}



// MOSTRAR LOCALIZACION EN CORDENADAS
// 
// function mostrar (pos)
// {
// 	document.write(pos.coords.latitude + "," + pos.coords.longitude);
// }
// navigator.geolocation.getCurrentPosition( mostrar );
//_______________________________
// Asignación por valor
// Asignación por referencia

//DOCUMENT OBJECT MODEL

// navigator, window, document

//Objeto
//	Variables
//	Funciones

// document.write("Hola mamá!");
// var pi = 3.141592654;
// pi = Math.floor(pi);
// document.write(pi);

// var maxima;
// maxima = Math.max( 5,23,4,5,12,23,23 );
// document.write(maxima);
