var url = "https://api.spotify.com/v1/me/player/pause";

var xhr = new XMLHttpRequest();
xhr.open("PUT", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer BQAeYIfXwX9wYPSLjqlcS79jdxTBl5DBSUt47El0HnCNHqpVgN5Al69AHszq-rKLbi95ynL7wLUWPE-V9PueF1JZ-04yM63t2Lby-oO7KCgwTyrN7QUC6ZhKMJR_uSsfbB3KzqtDUkeALK0xlQ");
xhr.setRequestHeader("Content-Length", "0");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

