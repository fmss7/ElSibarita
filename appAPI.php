<?php

require_once('../config_params.php');

class API{

	private $methods = ['getUsuarios'];

    function __construct(){
        header('Access-Control-Allow-Origin: *');
		$this->mysqli = new mysqli($GLOBALS['db']['hostname'], $GLOBALS['db']['username'], $GLOBALS['db']['password'], $GLOBALS['db']['database']);
		$this->mysqli->set_charset($GLOBALS['db']['char_set']);
    }
	
	function processApi(){
		if(isset($_REQUEST['apikey'])){
			if($_REQUEST['apikey'] == $GLOBALS['db']['apikey']){
				if(isset($_REQUEST['method'])){
					if(in_array($_REQUEST['method'], $this->methods)){
						$method = $_REQUEST['method'];
						$this->$method();
					}else{
						echo 'Unknown method';
					}
				}else{
					echo 'No method passed';
				}
			}else{
				echo 'Invalid apikey';
			}
		}else{
			echo 'No apikey passed';
		}
	}
	
	private function getUsuarios(){
	    try{
			$res = $this->mysqli->query("SELECT * FROM usuarios;");
            if($res){
				$users = [];
				while ($user = $res->fetch_assoc()) {
					array_push($users, $user);
				}
				print_r(json_encode($users));
            }
        }catch(PDOException $e){
            echo $e->getMessage();
        }
		

	}
}
    $api = new API;
    $api->processApi();
?>