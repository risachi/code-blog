$(function() {

  function Project(piece) {
    this.title = piece.title;
    this.thumbnail = piece.thumbnail;
    this.image = piece.image;
    this.oneLiner = piece.oneLiner;
    this.description = piece.description;
    this.publishedOn = piece.publishedOn;
  }

  Project.prototype.toHtml = function() {
    var MILLIS_TO_DAYS = 60*60*24*1000;
    var $newProject = $('article.template').clone();

    $newProject.find('h2').html(this.title);
    $newProject.find('#oneLiner').html(this.oneLiner);
    $newProject.find('a > img').attr('alt', this.title);
    $newProject.find('a > img').attr('src', this.thumbnail);
    $newProject.find('div > a').attr('href', this.image);
    $newProject.find('div > a').attr('title', this.description);

    $newProject.find('time').html('title', this.publishedOn);

    $newProject.find('time').html('posted ' + parseInt((new Date() - new Date(this.publishedOn)) / MILLIS_TO_DAYS) + ' days ago');


    $newProject.removeClass('template');
    return $newProject;
  };

  posts.forEach(function(a) {
    $('#projects').append(new Project(a).toHtml());
  });

  $("a[rel^='prettyPhoto']").prettyPhoto();
});
