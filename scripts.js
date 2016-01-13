$(function() {
  $('nav a').on('click', function(e) {
    // * Find out the tab number
    var tab = $(e.target);
    var tabNumber = tab.attr('data-tab-number');

    // * Return and do nothing if same tab was clicked (is active)
    if (tab.hasClass('active')) {
      return;
    }

    // * Get the content tab
    var contentTab = $('div[data-tab-number=' + tabNumber + ']');

    // * Hide'em all
    $('div[data-tab-number]').hide();

    // * Show the one we want
    contentTab.show();

    // * Toggle .active on all a's inside of nav
    $('nav a').toggleClass('active');
  });

  function Project(piece) {
    this.title = piece.title;
    this.thumbnail = piece.thumbnail;
    this.image = piece.image;
    this.oneLiner = piece.oneLiner;
    this.description = piece.description;
    this.publishedOn = piece.publishedOn;
  }

  Project.prototype.age = function() {
    var MILLIS_IN_DAYS = 60 * 60 * 24 * 1000;
    return parseInt((new Date() - new Date(this.publishedOn)) / MILLIS_IN_DAYS);
  };

  Project.prototype.toHtml = function() {
    // var $newProject = $('article.template').clone();
    // $newProject.removeClass('template');

    // $newProject.find('h2').html(this.title);
    // $newProject.find('#oneLiner').html(this.oneLiner);
    // $newProject.find('a > img').attr('alt', this.title);
    // $newProject.find('a > img').attr('src', this.thumbnail);
    // $newProject.find('div > a').attr('href', this.image);
    // $newProject.find('div > a').attr('title', this.description);
    // $newProject.find('time').html('title', this.publishedOn);
    this.daysAgo = ('posted ' + this.age() + ' days ago');
    // return $newProject;
    var appTemplate = $('#handlebarsPortfolioTemplate').html();
    var compiledTemplate = Handlebars.compile(appTemplate);
    var html = compiledTemplate(this);
    $('#handlebarsTemplatePlacement').append(html);
  };

  posts.forEach(function(a) {
    $('#projects').append(new Project(a).toHtml());
  });

});
