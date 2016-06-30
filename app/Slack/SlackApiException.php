<?php

namespace DevLdn\Slack;

class SlackApiException extends \LogicException
{
    public static function createFromApiResponse(\stdClass $response)
    {
        if ($response->error === 'already_invited') {
            return new static(
                "You've already been invited! Check your email for your invitation."
            );
        }
        return new static(
            "We received an error from the Slack API while trying to send your invitation. " .
            "Please contact us by email or on Twitter if you continue to have problems."
        );
    }
}
