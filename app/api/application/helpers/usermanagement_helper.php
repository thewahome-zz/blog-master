<?php 
function GetUserData() {
  $CI = & get_instance();   
  $id_users = $CI->session->userdata('id_users');
  if ($id_users) {         
    $CI->load->model('User');           
    $data['userData']=$CI->User->get_user_details($id_users);
    return $data; 
  } 
  else
  {
    return false;
  }
}
?>

