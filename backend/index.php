<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js"
  integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossorigin="anonymous"></script>
  <title>Prayer Time</title>

  <!-- Bootstrap core CSS -->
  <link href="../css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <!-- Custom styles for this template -->
  <link href="../css/style.css" rel="stylesheet">
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"> </script>
  <script>
    $(function() {
      var ts = Math.round((new Date()).getTime() / 1000);
      console.log(ts);
      $.getJSON('times.json?v='+ts, function(data) {
        /*alert(data.fazr);*/
        if(data.fazr) {
          $("#fazr").val(data.fazr);
        }
        if(data.suhur) {
          $("#suhur").val(data.suhur);
        }
        if(data.dhuhr) {
          $("#dhuhr").val(data.dhuhr);
        }
        if(data.asr) {
          $("#asr").val(data.asr);
        }
        if(data.isha) {
          $("#isha").val(data.isha);
        }
        if(data.jummah) {
          $("#jummah").val(data.jummah);
        }
        if(data.jummah2) {
          $("#jummah2").val(data.jummah2);
        }
      });
    });
  </script>
  <meta http-equiv="cache-control" content="no-cache" />
  <meta http-equiv="cache-control" content="no-store" />
</head>
<body>
  <div class="conainer">
    <div class="row">
      <div class="col col-md-12">
        <center>
          <h1>Form</h1>
          <form name="form1" method="post" action="savePrayerTime.php">
            <p>
              <label for="name">Suhur: </label>
              <input type="text" name="suhur" id="suhur" placeholder="3:34 AM" autofocus required>
            </p>
            <p>
              <label for="name">Fazr: </label>
              <input type="text" name="fazr" id="fazr" placeholder="6:34 AM" autofocus required>
            </p>
            <p>
              <label for="name">Dhuhr: </label>
              <input type="text" name="dhuhr" id="dhuhr" placeholder="1:30 PM" required>
            </p>
            <p>
              <label for="name">Asr: </label>
              <input type="text" name="asr" id="asr" placeholder="4:30 PM" required>
            </p>
            <!--<p>
              <label for="name">Maghrib: </label>
              <input type="text" name="maghrib" id="maghrib" placeholder="7:34 PM" required>
            </p>-->
            <p>
              <label for="name">Isha: </label>
              <input type="text" name="isha" id="isha" placeholder="9:34 PM" required>
            </p>
            <p>
              <label for="name">Jummah: </label>
              <input type="text" name="jummah" id="jummah" placeholder="1:20 PM" required>
            </p>
            <p>
              <label for="name">Jummah2: </label>
              <input type="text" name="jummah2" id="jummah2" placeholder="2:15 PM" required>
            </p>
            <p style="text-align: center;">
              <input type="submit" name="submit" id="submit" value="Submit">
            </p>
          </form>
        </center>
      </div>
    </div>    
  </div>
</body>
</html>