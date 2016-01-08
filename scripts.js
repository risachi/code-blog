var projects = [];

function Project (piece) {
  this.title = piece.title;
  this.thumbnail = piece.thumbnail;
  this.image = piece.image;
  this.oneLiner = piece.oneLiner;
  this.description = piece.description;
}

Project.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();

  $newProject.find('h1').html(this.title);
  $newProject.find('#thumbnail').html(this.thumbnail);
  $newProject.find('#oneLiner').html(this.oneLiner);
  $newProject.find('#image').html(this.image);
  $newProject.find('#description').html(this.description);

  $newProject.append('<hr>');

  $newProject.removeClass('template');
  return $newProject;
};

posts.forEach(function(a) {
  $('#projects').append((new Project(a)).toHtml());
});
