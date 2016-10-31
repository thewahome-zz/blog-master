<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Menus extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        if ($this->session->userdata('logged_in') !== true) {
            $this->jsonify(
                array(
                    'success' => false,
                    'menu' => array(
                        array(
                            'active' => true,
                            'href' => '#/login',
                            'label' => 'Login'
                        ),
                        array(
                            'active' => false,
                            'href' => '#/registration',
                            'label' => 'Registration'
                        )
                    )
                )
            );
            exit();
        }
    }

    public function index()
    {
        $data = GetUserData();

        $userRole = $data['userData'][0]['role'];
        $userName = $data['userData'][0]['username'];
        if ($userRole == ADMIN) {
            $menuLinks = array(
                'success' => true,
                'menu' => array(
                    array(
                        'active' => true,
                        'href' => '#/home',
                        'label' => 'Home'
                    ),
                    array(
                        'active' => false,
                        'href' => '#/manage-blog',
                        'label' => 'Manage Blog'
                    ),
                    array(
                        'active' => false,
                        'href' => '#/profile',
                        'label' => 'Profile('.$userName.')'
                    ),
                    array(
                        'active' => false,
                        'href' => '#/logout',
                        'label' => 'Logout'
                    )
                )
            );
        } else {
            $menuLinks = array(
                'success' => true,
                'menu' => array(
                    array(
                        'active' => true,
                        'href' => '#/home',
                        'label' => 'Home'
                    ),
                    array(
                        'active' => false,
                        'href' => '#/blog',
                        'label' => 'The Blog'
                    ), 
                    array(
                        'active' => false,
                        'href' => '#/profile',
                        'label' => 'Profile('.$userName.')'
                    ),
                    array(
                        'active' => false,
                        'href' => '#/logout',
                        'label' => 'Logout'
                    )
                )
            );
        }
        $this->jsonify($menuLinks);
        exit();
    }

    public function jsonify($data)
    {
        print_r(json_encode($data));
    }

}

/* End of file menus.php */
/* Location: ./application/controllers/menus.php */