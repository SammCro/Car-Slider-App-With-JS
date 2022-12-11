# Car-Slider-App-With-JS
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!--Fontawesome for icons-->
    <script
      src="https://kit.fontawesome.com/bc144d14ab.js"
      crossorigin="anonymous"
    ></script>
    <!--CSS stylesheet-->
    <link rel="stylesheet" href="style.css" />
    <!--Bootstrap-->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="card">
      <div class="card-header" style="padding: 0px">
        <img id = "car_image"
          alt="car_image"style="width: 100%;"/>
      </div>
      <div class="card-body" style="text-align: center">
        <h1 id="car_title"></h1>
        <p>It will fly you.</p>
        <button class="btn btn-primary btn-big">Read More</button>
      </div>
      <div class="card-footer" style="text-align: center">
        <i
          class="fa-solid fa-arrow-left fa-3x arrow"
          id="previousButton"
          style="margin-right: 15px"
        ></i>
        <i
          class="fa-solid fa-arrow-right fa-3x arrow"
          id="nextButton"
          style="margin-right: 15px"
        ></i>
      </div>
    </div>

    <!--Javascript link-->
    <script src="script.js"></script>
    <!--Bootstrap Links-->
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
