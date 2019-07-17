# Prestashop CRUD

Agregar en la primera linea webservice/dispatcher.php
header('Access-Control-Allow-Origin: \*');
header("Access-Control-Allow-Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With");
