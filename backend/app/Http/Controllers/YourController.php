<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class YourController extends Controller
{
    public function getData()
    {
        return response()->json(['message' => 'Data fetched successfully!']);
    }
}
