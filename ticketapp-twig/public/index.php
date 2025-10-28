<?php
// Simple front controller that renders Twig templates based on path
require_once __DIR__ . '/../vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/../templates');
$twig = new \Twig\Environment($loader);

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
if ($path === '/' || $path === '') {
  echo $twig->render('home.twig');
  exit;
}

// Map basic routes to templates
$routes = [
  '/auth/login' => 'auth/login.twig',
  '/auth/signup' => 'auth/signup.twig',
  '/dashboard' => 'dashboard.twig',
  '/tickets' => 'tickets/index.twig',
  '/tickets/new' => 'tickets/new.twig',
];

// dynamic ticket routes: /tickets/{id}, /tickets/{id}/edit
if (preg_match('#^/tickets/([^/]+)/edit$#', $path, $m)) {
  echo $twig->render('tickets/edit.twig', ['id' => $m[1]]);
  exit;
}
if (preg_match('#^/tickets/([^/]+)$#', $path, $m)) {
  echo $twig->render('tickets/show.twig', ['id' => $m[1]]);
  exit;
}

if (array_key_exists($path, $routes)) {
  echo $twig->render($routes[$path]);
  exit;
}

// default: 404
http_response_code(404);
echo $twig->render('404.twig');
