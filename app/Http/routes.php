<?php

use DevLdn\Slack\Client;
use DevLdn\Slack\SlackApiException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

Route::get('/', function () {
    return view('home');
});

Route::post('/', [
    'as' => 'slack.register',
    function (Request $request, Client $slack) {
        /** @var \Illuminate\Validation\Validator $validator */
        $validator = Validator::make($request->all(), [
            'email' => 'required|email'
        ]);

        if ($validator->fails()) {
            if ($request->ajax()) {
                return response()->json(['errors' => $validator->messages()], 400);
            }
            return redirect('/')->withErrors($validator)->withInput();
        }

        try {
            $slack->invite($request->input('email'));
        } catch (SlackApiException $e) {
            Log::error($e->getMessage());
            if ($request->ajax()) {
                return response()->json(['errors' => ['email' => $e->getMessage()]], 400);
            }
            return redirect('/')->withErrors(['email' => $e->getMessage()])->withInput();
        }

        return $request->ajax() ? new JsonResponse(['message' => 'Invitation Sent!']) : redirect('/');
    }
]);


