<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    @include('meta')

    <title>DevLdn -- London Ontario's Developer Community.</title>

    <link href="{{ elixir('css/all.css') }}" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div class="container topnav">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand topnav" href="#">
                    <img src="{{ elixir('images/devldn_vertical.png') }}" alt="DevLdn Logo" height="35px" width="100px">
                    <span class="text-hide">DevLdn</span>
                </a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#php-meetup">PHP Meetup</a></li>
                    <li><a href="#fed-meetup">Front-End Meetup</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>


    <!-- Header -->
    <div class="intro-header">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>DevLdn</h1>
                        <h3>London Ontario's Developer Community</h3>
                        <hr class="intro-divider">
                        <form action="{{ route('slack.register') }}" method="POST">
                            {{ csrf_field() }}
                            <div class="col-md-6 col-md-offset-3 form-group {{ $errors->has('email') ? 'has-error' : '' }}">
                                <label for="email" class="control-label">Join Our Slack Channel</label>
                                <div class="input-group">
                                    <input
                                            type="email"
                                            name="email"
                                            class="form-control input-lg"
                                            placeholder="Enter your Email address...">
                                    <span class="help-block">
                                        {{ $errors->has('email') ? $errors->first('email') : '' }}
                                    </span>
                                    <span class="input-group-btn">
                                        <button type="submit" class="btn btn-primary btn-lg">Join</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.intro-header -->

    <!-- Page Content -->

    <div class="content-section-a" id="php-meetup">

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-sm-6">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="section-heading">PHP Meetup</h2>
                    <p class="lead">Learn and network with other PHP developers every 3rd Wednesday of the month at our <a target="_blank" href="http://www.meetup.com/London-PHP-Meetup">PHP Meetup</a></p>
                </div>
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img class="img-responsive" src="{{ elixir('images/php-logo.png') }}" alt="PHP">
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.content-section-a -->

    <div class="content-section-b" id="fed-meetup">

        <div class="container">

            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Front-End Meetup</h2>
                    <p class="lead">Hang out and discuss JavaScript, CSS and other front-end related tips, tricks, hacks, and frameworks with some of the other local developers. Show off cool stuff you've done and learn about what else is going on in the community. No pressure, no mandatory presentations at our <a target="_blank" href="http://www.meetup.com/London-Front-end-Development-Meetup">Front-End Meetup</a>.</p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="{{ elixir("images/front-end-logo.svg") }}" alt="">
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.content-section-b -->

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="copyright text-muted small">Copyright &copy; DevLdn {{ date('Y') }}. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>

    @include('analytics')
    <script src="{{ elixir('js/all.js') }}"></script>
</body>

</html>
