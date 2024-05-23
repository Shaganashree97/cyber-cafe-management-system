<?php

session_start();
$_SESSION = array();
session_destroy();

header("Location: ./cyber-cafe/src/App.jsx");
exit();

?>