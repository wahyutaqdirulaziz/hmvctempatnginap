<?php
function web_url($path)
{
	$CI =& get_instance();
	$protocol = isset($_SERVER["HTTPS"]) ? 'https://' : 'http://';
	return $protocol.$CI->config->item('web').'/'.$path;
}

function admin_url($path)
{
	$CI =& get_instance();
	$protocol = isset($_SERVER["HTTPS"]) ? 'https://' : 'http://';
	return $protocol.$CI->config->item('admin').'/'.$path;
}

function admin_uri_segment($segment)
{
	$CI =& get_instance();
	$result = in_array($_SERVER['HTTP_HOST'], $CI->config->item('localhost')) ? $CI->uri->segment($segment + 1) : $CI->uri->segment($segment);
	return $result;
}

function api_url($path)
{
	
}