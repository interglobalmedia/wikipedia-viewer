// Don't need an API key.
// Making a normal json request to wikipedia would result in a cross origin or cross site error
// because wikipedia servers forbid cross origin requests.
// Wikipedia AJAX request goes here

function wikiViewer() {
  var theTitle = '';
  var theContent = '';
  createView();
  $('input[type="submit"]').on('click', function() {
    createView();
  });

  function createView() {
    var wikiURL;
    var wikiURLStart = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='
    var articleStr;
    var wikiURLEnd = '&format=json&callback=wikiCallback';

    $.ajax({
        url: wikiURL,
        type: 'GET',
        data: {},
        dataType: 'jsonp',
        success: function(data) {
          theTitle = data.title;
          theContent = data.content;
          $('#title').html() = theTitle;
          $('#content').html() = theContent;

          for (var i = 0; i < articleList.length; i++) {
            articleStr = articleList[i];
            wikiURL = "http://en.wikipedia.org/wiki/" + articleStr + wikiURLEnd;
            $wikiElem.append('<li><a href="' + url + '">' + articleStr + wikiURLEnd + '</a></li>');
          }
        }
    });
  }
}
wikiViewer();
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