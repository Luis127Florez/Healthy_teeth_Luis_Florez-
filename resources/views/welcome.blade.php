<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Healthy teeth</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #ffff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #ffffff;
                font-family: "Latin Modern Roman 10";
                font-style: oblique;
                line-height: 1;
                padding: 0 25px;
                font-size: 25px;
                font-weight: bold;
                text-decoration: none;
               
            }

            .m-b-md {
                margin-bottom: 30px;
            }
            .footer {
            height: 17rem;
            background-color:#000000;
            }

            .formh1{
                color:#000000 ;
                font-family: "Latin Modern Roman 10";
                 font-style: oblique;
                 font-weight: 500;
                line-height: 1.6;

            }
        </style>
    </head>
    <body>
    <div id="contenido" >
    
    </div>

    <div id="Tarjeta">
    </div>
    <br>
    </br>
    <div id="FilaTar">

    </div>

    <div id="FilaTar1">

    </div>
    <div id="FilaTar2">

    </div>
    
<br>
<br>
<h1 class="formh1" >Envianos tu opinion</h1>
<br>

 <div id="Form">
 
 </div>
 
 <div>
 </div>
 
 <br>
 
  <div >
  @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Ingresar</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Registrase</a>
                        @endif
                    @endauth
                </div>
            @endif
  </div>
  
                 
             
    
    </body>

    <footer class="footer">
    <div id="Tablefooter">
    </div>
    <div id="Tablefooter2">
    </div>
</footer>
  


    <script src="js/app.js"></script>
</html>
