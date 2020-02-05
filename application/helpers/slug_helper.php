<?php
function generateSlug($string, $table, $field)
{
	$CI =& get_instance();
	$count = 0;
	$string = url_title($string, '-', TRUE);
	$slug = $string;
	while(true)
	{
		$query = $CI->db->get_where($table, [$field => $slug]);
		if ($query->num_rows() == 0) break;
			$slug = $string . '-' . (++$count);
	}
	return $slug;
}
