$(function() {

  function Project(piece) {
    this.title = piece.title;
    this.thumbnail = piece.thumbnail;
    this.image = piece.image;
    this.oneLiner = piece.oneLiner;
    this.description = piece.description;
  }

  Project.prototype.toHtml = function() {
    var $newProject = $('article.template').clone();

    $newProject.find('h2').html(this.title);
    $newProject.find('#thumbnail').html(this.thumbnail);
    $newProject.find('#oneLiner').html(this.oneLiner);
    $newProject.find('div > a').attr('href', this.image);
    $newProject.find('a > img').attr('alt', this.title);
    $newProject.find('div > a').attr('title', this.description);

    $newProject.removeClass('template');
    return $newProject;
  };

  posts.forEach(function(a) {
    $('#projects').append((new Project(a)).toHtml());
  });

  $('.template').hide();
  $("a[rel^='prettyPhoto']").prettyPhoto();
});
