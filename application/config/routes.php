<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/

require_once( APPPATH .'config/tempatnginap.php');

$route['translate_uri_dashes'] = TRUE;

$host = in_array($_SERVER['HTTP_HOST'], $config['localhost']) ? $_SERVER['HTTP_HOST'].'/'.explode('/', $_SERVER['REQUEST_URI'])[1].'/'.explode('/', $_SERVER['REQUEST_URI'])[2] : $_SERVER['HTTP_HOST'];

switch ( $host ) {

    case $config['admin']:
        $route['default_controller'] = "admin/dashboard";

        if(!in_array($_SERVER['HTTP_HOST'], $config['localhost'])){
			$route['(:any)'] = 'admin/$1';
            $route['(:any)/(:any)'] = 'admin/$1/$2';
            $route['(:any)/(:any)/(:any)'] = 'admin/$1/$2/$3';
            $route['(:any)/(:any)/(:any)/(:any)'] = 'admin/$1/$2/$3/$4';
            $route['(:any)/(:any)/(:any)/(:any)/(:any)'] = 'admin/$1/$2/$3/$4/$5';
        }
		else {
        	$route['admin'] = 'admin/dashboard';
    	}

    break;

    case $config['api']:
        $route['default_controller'] = "home";
        $route['admin'] = 'admin/dashboard';
    break;

    default:
        /* DEFAULT ROUTE */
	    $route['default_controller'] = 'web/home';
		$route['404_override'] = '';

		$route['(:any)'] = 'web/$1';
		$route['vila/(:any)'] = 'web/vila/index/$1';
		$route['kos/(:any)'] = 'web/kos/index/$1';
		$route['rumahan/(:any)'] = 'web/rumahan/index/$1';
		$route['hotel/(:any)'] = 'web/hotel/index/$1';
		$route['lodging/(:any)'] = 'web/lodging/index/$1';
		$route['kategori/(:any)'] = 'web/kategori/index/$1';
}