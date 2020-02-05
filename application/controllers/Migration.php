<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Migration extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Permission');
		$this->load->model('Role');
		$this->load->model('User');
        $this->load->library('auth');
        $this->auth->route_access();
	}

	public function index(){
		// $this->Permission->add([
		//     'name' => 'index-migration',
		//     'display_name' => 'Migration',
		//     'status' => 1,
		// ]);

		// $this->Role->addPermissions(1, [3]);
    }

    public function create() {

    }
}
