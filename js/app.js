// Don't need an API key.
// Making a normal json request to wikipedia would result in a cross origin or cross site error
// because wikipedia servers forbid cross origin requests.
// Wikipedia AJAX request goes here
$('.wikipedia-container').hide();
$(document).ready(function() {
  $("#search_submit").submit(function() {
    $('.wikipedia-container').show();
  });
  $.getJSON("http://en.wikipedia.org/w/api.php?format=json&action=query&titles=Main%20Page&prop=revisions&rvprop=content", function() {
    var html = '';
    json.forEACH(function(val) {
      html +="<div class='wikipedia-container'>";
      html +="<a href='" + val.wikiLink + "'>";
      html +="</a>";
      html +="</div>";
    });
    $(".wikipedia-container").html(html);
  });
});
/* :)

What needs to be done in this program:

  1. User inputs a search query and submits.
    - We need to take the text-area's input.
  2. Query is used to get data from Wikipedia.
    - We need to create a connection to Wiki. We can definitely do that. :)
    - Wiki will return JSON.
  3. Data returned from Wikipedia is structured on the page.
    - Use that JSON to create elements.
  4. User can click an entry to visit the full article.
    - Each element has a <a href=''> wrapper. Ok. HTML? Shall we?
    
    I thought that I had a link to Google Fonts in my HTML. Did you take it to put into the CSS?
Thank you!
*/