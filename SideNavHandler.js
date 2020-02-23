//Set default view to Dashboard
$(document).ready(function() {
  $.get('./Component/DashBoardComponent.html', function(data) {
    $('#root').html(data);
  });
});

//Add Listener to DashBoard Link
$('#dashboardLink').click(function() {
  $.get('./Component/DashBoardComponent.html', function(data) {
    $('#root').html(data);
    $('.nav-link.active')
      .removeClass()
      .addClass('nav-link');
    $('#dashboardLink')
      .removeClass()
      .addClass('nav-link active');
  });
});

//Add listener to Profile Link
$('#profileLink').click(function() {
  $.get('./Component/ProfileComponent.html', function(data) {
    $('#root').html(data);
    $('.nav-link.active')
      .removeClass()
      .addClass('nav-link');
    $('#profileLink')
      .removeClass()
      .addClass('nav-link active');
  });
});

//Add Listener to History link
$('#historyLink').click(function() {
  $.get('./Component/HistoryComponent.html', function(data) {
    $('#root').html(data);
    $('.nav-link.active')
      .removeClass()
      .addClass('nav-link');
    $('#historyLink')
      .removeClass()
      .addClass('nav-link active');
  });
});