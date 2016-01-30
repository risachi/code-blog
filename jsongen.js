$(function(){
  var appTemplate = $('#handlebarsPortfolioTemplate').html();
  var compiledTemplate = Handlebars.compile(appTemplate);
  var placeHolder = $('#handlebarsTemplatePlacement');

  $.get('projects.json', function(data){
    var html = compiledTemplate({project:data});
    placeHolder.append(html);
  });
});
