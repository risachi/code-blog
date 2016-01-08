function Project (piece) {
  this.title = piece.title;
  this.thumbnail = piece.thumbnail;
  this.image = piece.image;
  this.oneLiner = piece.oneLiner;
  this.description = piece.description;
}

Project.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();

  $newProject.data('category', this.category);

  $newArticle.find('h1').html(this.title);
  $newArticle.find('thumbnail').html(this.thumbnail);
  $newArticle.find('oneLiner').html(this.oneLiner);
  $newArticle.find('image').html(this.image);

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newArticle.append('<hr>');

  // DONE: This cloned article is no longer a template, so we should remove that class...
  $newArticle.removeClass('template');
  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
