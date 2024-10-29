<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Usuario extends Controller
{
    //

    public function pepeCustom(){
        return view("pepe" , [
            "hello" => "hola",
        ]);
    }
}
