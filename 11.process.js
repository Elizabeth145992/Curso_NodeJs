//Argumentos de entrada
console.log(process.argv);

//current working directory
console.log("Directorio de trabajo actual: ", process.cwd());

//Variables de entorno
console.log("Variable de entorno PATH: ", process.env.PRUEBA || "No definida");

//controlar eventos del proceso
process.on("exit", (code) => {
  console.log("El proceso va a finalizar con el código : ", code);
  console.log("Realizando limpieza antes de salir...");
});

//Controlar el proceso y su salida
process.exit(0); //0 indica que todo salió bien
process.exit(1); //1 indica que hubo un error