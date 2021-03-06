User.getInstance().addObserver(() => {
  //User just logged in
  if (User.getInstance().isLoggedIn()) {
    setLinksLoggedIn();
  }
  //User just logged out
  else {
    setLinksLoggedOut();
    setComponentToDashBoard();
  }
});

//Reset the Component locations on resize.
$(window).on('resize', setWindowSizes);

//Set startup view to Dashboard
$(document).ready(function () {
  setLinksLoggedOut();
  setComponentToDashBoard();
  setWindowSizes();
});

function setLinksLoggedIn() {
  $('#loginNav').remove();
  addExerciseLink();
  addHistoryLink();
  addProfileLink();
  addAnalysisLink();
  addFaqLink();
}

function setLinksLoggedOut() {
  $('#profileNav').remove();
  $('#historyNav').remove();
  $('#exerciseNav').remove();
  $('#analysisNav').remove();
  addLoginLink();
  addFaqLink();
}

function addExerciseLink() {
  if (!$('#exerciseNav').length) {
    $('#accordionSidebar')
      .append(`<li class="nav-item" role="presentation" id='exerciseNav'>
             <a class="nav-link pointer" id="exerciseLink">
             <i class="fas fa-biking"></i><span>Excerise</span></a>
             </li>`);
    $('#exerciseLink').click(function () {
      $.get('./Component/Exercise.html', function (data) {
        $('#root').html(data);
        setNavLinkActive('exerciseLink');
      });
    });
  }
}

function addProfileLink() {
  if (!$('#profileNav').length) {
    $('#accordionSidebar')
      .append(`<li class="nav-item" role="presentation" id='profileNav'>
             <a class="nav-link pointer" id="profileLink">
             <i class="fas fa-user"></i><span>Profile</span></a>
             </li>`);
    $('#profileLink').click(function () {
      $.get('./Component/ProfileComponent.html', function (data) {
        $('#root').html(data);
        setNavLinkActive('profileLink');
      });
    });
  }
}

function addLoginLink() {
  if (!$('#loginNav').length) {
    $('#profileNav').remove();
    $('#accordionSidebar')
      .append(`<li class="nav-item" role="presentation" id='loginNav'>
             <a class="nav-link pointer"  data-toggle="modal" data-target="#loginModal">
             <i class="far fa-user-circle"></i><span>Login</span></a>
             </li>`);
  }
}

function addHistoryLink() {
  if (!$('#historyNav').length) {
    $('#accordionSidebar')
      .append(`<li class="nav-item" role="presentation" id="historyNav">
             <a class="nav-link pointer" id="historyLink">
             <i class="fas fa-table"></i><span>History</span></a>
             </li>`);

    $('#historyLink').click(function () {
      $.get('./Component/HistoryComponent.html', function (data) {
        $('#root').html(data);
        setNavLinkActive('historyLink');
      });
    });
  }
}

function addFaqLink() {
  if (!$('#faqNav').length) {
    $('#accordionSidebar')
      .append(`<li class="nav-item" role="presentation" id="faqNav">
             <a class="nav-link pointer" id="faqLink">
             <i class="fas fa-table"></i><span>Faq</span></a>
             </li>`);

    $('#faqLink').click(function () {
      $.get('./Component/Faq.html', function (data) {
        $('#root').html(data);
        setNavLinkActive('faqLink');
      });
    });
  }
}

function addAnalysisLink() {
  if (!$('#analysisNav').length) {
    $('#accordionSidebar')
      .append(`<li class="nav-item" role="presentation" id="analysisNav">
             <a class="nav-link pointer" id="analysisLink">
             <i class="fas fa-table"></i><span>Analysis</span></a>
             </li>`);

    $('#analysisLink').click(function () {
      $.get('./Component/Analysis.html', function (data) {
        $('#root').html(data);
        setAnalysisLinkActive('analysisLink');
      });
    });
  }
}

//Force the Contents and nav bars into the correct positions.
function setWindowSizes() {
  $('#content').height($(window).height() - 75); //50 is the height of the Top nav.
  $('#root').css({
    'margin-left': $('#side').width() + 'px',
  });
  $('#content').css({
    'margin-top': $('#top').height() + 45 + 'px', //An arbitrary number. Increace it to move the contents down.
  });
}

/**
 * @description Removes the 'active' class from all nav-links and then adds 'active' to elements with the input id.
 * @param {*} id the id of the nav link tag.
 */
function setNavLinkActive(id) {
  $('.nav-link.active').removeClass('active');
  $('#' + id).addClass('active');
}

function setAnalysisLinkActive(id) {
  $('.analysis-link.active').removeClass('active');
  $('#' + id).addClass('active');
}

//Add Listener to DashBoard Link
$('#dashboardLink').click(function () {
  $.get('./Component/DashBoardComponent.html', function (data) {
    $('#root').html(data);
    setNavLinkActive('dashboardLink');
  });
});

function setComponentToDashBoard() {
  $.get('./Component/DashBoardComponent.html', function (data) {
    $('#root').html(data);
  });
}

function setFaq() {
  $.get('./Component/Faq.html', function (data) {
    $('#root').html(data);
  });
}
