<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $validatedData = $request->validated();

        $user = User::where('email', $validatedData['email'])->first();
        if ($user) return response(['email' => 'User exist']);

        $user = User::create($validatedData);
        if ($user) {
            $token = auth()->tokenById($user->id);
            return response(['token' => $token]);
        }

        return response()->json([
            'message' => 'An error occurred when creating a user'
        ]);
    }
}
