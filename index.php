<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Validador</title>
    <script src="ValidarRut.js"></script>
</head>
<body>
    <div class="center">
        <div class="Titulo">
            <h1>Validador de Rut</h1>
        </div>
        <div class="Validar_imput">
            <form>
                <label for="rut">Ingrese RUT:</label>
                <input type="text" id="rut" name="rut">
                <button type="button" onclick="valida()">Validar</button>
            </form>
            <div id="Resultado"></div>
        </div>
    </div>
</body>
</html>