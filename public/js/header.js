$(function(){
  $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(res){
      $(res).replaceAll("#header")
    }
  })
})
//在index.html底部引入<script src=header.js
//午间作业: 为index.html和details.html都添加页头和页脚