<?php

use DevLdn\Slack\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

Route::get('/', function () {
    return view('home');
});

Route::post('/', ['as' => 'slack.register', function (Request $request, Client $slack) {
    $validator = Validator::make($request->all(), [
        'email' => 'required|email'
    ]);

    if ($validator->fails()) {
        return redirect('/')
            ->withErrors($validator)
            ->withInput();
    }

    try {
        $slack->invite($request->input('email'));
    } catch (\Exception $e) {
        Log::error($e->getMessage());
    }

    return redirect('/');
}]);


