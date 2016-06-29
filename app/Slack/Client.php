<?php

namespace DevLdn\Slack;

use GuzzleHttp\Client as HttpClient;

/**
 * Class Client
 * @package DevLdn\Slack
 */
class Client
{
    /**
     * @var HttpClient
     */
    private $httpClient;
    /**
     * @var string
     */
    private $apiKey;

    /**
     * Client constructor.
     * @param HttpClient $httpClient
     * @param string     $apiKey
     */
    public function __construct(HttpClient $httpClient, string $apiKey)
    {
        $this->httpClient = $httpClient;
        $this->apiKey     = $apiKey;
    }

    /**
     * @param $email
     * @throws \Exception
     */
    public function invite($email)
    {
        $response = $this->request('POST', '/api/users.admin.invite?t=' . time(), [
            'email'      => $email,
            'set_active' => 'true',
            '_attempts'  => '1',
        ]);
        if ($response->ok !== true) {
            throw new \Exception('Slack API responded with error:' . $response->error);
        }
    }

    /**
     * @param string $method
     * @param string $path
     * @param array  $params
     * @return mixed
     */
    protected function request($method = 'GET', $path = '/', $params = [])
    {
        $request = $this->httpClient->request($method, $path, [
            'form_params' => array_merge(['token' => $this->apiKey], $params)
        ]);

        return \GuzzleHttp\json_decode($request->getBody());
    }
}
