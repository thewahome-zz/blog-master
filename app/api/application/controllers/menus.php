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
                            'position' => true,
                            'href' => '#/login',
                            'label' => 'Login'
                        ),
                        array(
                            'position' => false,
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
                        'position' => 0,
                        'href' => '#/home',
                        'label' => 'Home'
                    ),
                    array(
                        'position' => 1,
                        'href' => '#/manage-blog',
                        'label' => 'Manage Blog'
                    ),
                    array(
                        'position' => 2,
                        'href' => '#/profile',
                        'label' => 'Profile('.$userName.')'
                    ),
                    array(
                        'position' => 3,
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
                        'position' => 0,
                        'href' => '#/home',
                        'label' => 'Home'
                    ),
                    array(
                        'position' => 1,
                        'href' => '#/blog',
                        'label' => 'The Blog'
                    ), 
                    array(
                        'position' => 2,
                        'href' => '#/profile',
                        'label' => 'Profile('.$userName.')'
                    ),
                    array(
                        'position' => 3,
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