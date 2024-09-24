<?php

namespace App\Http\Controllers;

abstract class Controller
{
    //
    // Implement any additional custom methods or logic here
    //

    public function customMethod()
    {
        // Custom method implementation
        echo "Content Delivery Networks (CDNs) "  ;
    }
    //... other methods and properties
    public function cdnCustom(){
        return "CDNs are used to deliver content more quickly and efficiently." ;
    }


    public function pepeCustom(){
        return  "Content Delivery Networks";
    }

    public function contact(){
        return "Contact Us: 123-456-7890";
    }
}
