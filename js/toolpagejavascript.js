$(document).ready(function(){
  $("#report-Id").click(function(){
    $(".dashview").hide();
    $(".reportView").show();
    $(".codeReview").hide();
    $(".testCode").hide();
     $(".run-report").hide();
     $(".linkview").hide();
      $(".machineView").hide();

 });
  //
$("#dash-Id").click(function(){
    $(".dashview").show();
    $(".reportView").hide();
    $(".codeReview").hide(); 
    $(".testCode").hide();
     $(".run-report").hide();
     $(".linkview").hide();
      $(".machineView").hide();
  
 });

$("#review-Id").click(function(){
    $(".dashview").hide();
    $(".reportView").hide();
    $(".codeReview").show();
    $(".testCode").hide();
     $(".run-report").hide();
     $(".linkview").hide();
      $(".machineView").hide();

 });

  $("#run-Id").click(function(){
    $(".dashview").hide();
    $(".reportView").hide();
    $(".codeReview").hide();
    $(".testCode").show();
     $(".run-report").hide();
     $(".linkview").hide();
      $(".machineView").hide();

 });

   $("#link-Id").click(function(){
    $(".dashview").hide();
    $(".reportView").hide();
    $(".codeReview").hide();
    $(".testCode").hide();
    $(".linkview").show();
     $(".run-report").hide();
     $(".machineView").hide();
 });
    $("#machine-Id").click(function(){
    $(".machineView").show();
    $(".dashview").hide();
    $(".reportView").hide();
    $(".codeReview").hide();
    $(".testCode").hide();
    $(".linkview").hide();
    $(".run-report").hide();
 });

   $("#run-btn").click(function(){
    $(".testCode").hide();
    $(".run-report").show();
  });

   $("#new-run").click(function(){
    $(".testCode").show();
    $(".run-report").hide();
  });

   $("#full-view-Id").click(function(){
    $(".toolmenu").hide(1000);
    $(".half-view").show();
    $(".full-view").hide();
    $(".viewBody").css("margin-left","50px");
  });

   $("#half-view-Id").click(function(){
    $(".toolmenu").show(1000);
    $(".half-view").hide();
    $(".full-view").show();
    $(".viewBody").css("margin-left","0px");
  });

   $('#logo-Id').click(function() {
    location.reload();
});

  /*$("#logo-Id").click(function(){
    $(".toolmenu").show();
    $(".viewBody").css("margin-left","0px");
  });*/
 // $("#jqxLoader").jqxLoader({ width: 100, height: 60, imagePosition: 'top' });
   //$("#demo").introLoader();
   //$('#jqxLoader').jqxLoader('open');logo-Id

 });

