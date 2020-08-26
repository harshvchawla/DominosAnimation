/* disabled code */
/*

****************************************************************************
<!-- diet table -->
  <div class="container"> <!--top-container-->
    <div class="row"> <!--top-row-->

      <div class="col"> <!--diet-column-->
      
        <div class="row"> <!--diet-heading-row-->
          <div class="col"><h1>DIET</h1></div>
          <div class="col"><h6>date range picker here</h6></div>
        </div> <!--diet-heading-row-->
      
        <div class="row"> <!--diet-table-row-->
          <table class="table">
            <thead>
              <tr>
                <th scope="col">DATE</th>
                <th scope="col">TIME</th>
                <th scope="col">CATEGORY</th>
                <th scope="col">ITEM</th>
                <th scope="col">ITEM</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">yummy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></div></th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div> <!--diet-table-row-->

      </div> <!--diet-column-->
      
      <div class="col"> <!--health-column-->
        <h1>HEALTH</h1>
      </div> <!--health-column-->

    </div> <!--top-row-->
  </div> <!--top-container-->
****************************************************************************

****************************************************************************
<!--  canvas shape -->
<canvas class="" id="DemoCanvas" width="500" height="600"></canvas> 

var canvas = document.getElementById("DemoCanvas");
if (canvas.getContext) 
{
    console.log("drawing DemoCanvas");
  var ctx = canvas.getContext('2d');
  ctx.fillStyle='#fa4b2a';    // color of fill
  ctx.fillRect(10, 40, 140, 160); // create rectangle  
}
canvas.addEventListener('click', canvasClick(this), false);

function canvasClick(){
    console.log("clicked DemoCanvas");
    // this.classList.add('animate__animated animate__hinge')
} //canvasClick
****************************************************************************

****************************************************************************
<!--svg-->
  <div class="bottom-text">
    Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  </div>
  
  //'<img onclick="dominoClicked(this)" src="assets/dominoes.svg" alt="domino.svg" height="100" width="100"'/>

  // thisDomino.src="assets/dominoes.svg";
      // thisDomino.height = 100;
    // thisDomino.width = 50;

    const currentHeight=$(window).height() - 100;
$(".bottom-text").css( "color", "grey" );
$(".bottom-text").css( "top", currentHeight );


.bottom-text {
  position: absolute;
  top: 500px;
  right:0;
}
****************************************************************************

****************************************************************************
<!-- animate -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
//$(thisElementId).addClass('animate__animated animate__hinge');

****************************************************************************

****************************************************************************
<!--  jquery-ui -->
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

  <div id="datepicker">

  $("#datepicker").datepicker();
  ****************************************************************************
*/