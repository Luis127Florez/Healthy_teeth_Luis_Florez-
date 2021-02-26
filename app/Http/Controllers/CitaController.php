<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cita;
class CitaController extends Controller
{
    //
   public function Store(Request $request){
     $input = $request->all();
     $cita = cita::create($input);
    return response()->json($cita);

   }
   public function Getcita(){
    $datos ['result'] = cita::all();
    return response()->json($datos);   

   }

}
