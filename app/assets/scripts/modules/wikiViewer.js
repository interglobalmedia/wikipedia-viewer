import $ from 'jquery';
// Don't need an API key.
// Making a normal json request to wikipedia would result in a cross origin or cross site error
// because wikipedia servers forbid cross origin requests.
function wikiViewer() {
  $('#searchterm').keyup(e => {
    // query variable
    const q = $("#searchterm").val();
    $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
    {
      // srsearch param: search for all page titles (or content)
      // that have this value. https://www.mediawiki.org/wiki/API:Search
      srsearch: q,
      action: "query",
      list: "search",
      format: "json"
    },
    data => {
      const el = `Results for <b> ${q} </b>`;
      $(".section").empty().append(el);
      $.each(data.query.search, (i, item) => {
        $(".section").append(`<div id='results'><a href='http://en.wikipedia.org/wiki/${item.title}' ${encodeURIComponent(item.title)}> <h4> ${item.title} </h4>  ${item.snippet} </a></div>`);
        $("div #results a[href^='http://']" ).attr("target","_blank");
      });
    });
  });
}
export default wikiViewer;
/* /* What needs to be done in this program:

  1. User inputs a search query and submits.
    - We need to take the text-area's input.
  2. Query is used to get data from Wikipedia.
    - We need to create a connection to Wiki. We can definitely do that. :)
    - Wiki will return JSON.
  3. Data returned from Wikipedia is structured on the page.
    - Use that JSON to create elements.
  4. User can click an entry to visit the full article.
    - Each element has a <a href=''> wrapper.
*/
