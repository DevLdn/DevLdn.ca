<?php

namespace DevLdn\Providers;

use DevLdn\Slack\Client;
use GuzzleHttp\Client as HttpClient;
use Illuminate\Support\ServiceProvider;

class SlackServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Client::class, function () {
            $config = config('slack');
            return new Client(
                new HttpClient([
                    'base_uri' => "https://{$config['team']}.slack.com/"
                ]),
                $config['api_key']
            );
        });

        $this->app->alias(Client::class, 'slack');
    }
}
