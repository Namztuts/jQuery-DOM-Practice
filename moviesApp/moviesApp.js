$('#submit').on('click', function () {
   const $title = $('#title').val();
   const $rating = $('#rating').val();
   const movies = {};
   if ($title.length <= 2) {
      // if 2 or less characters, return!
      return alert('Movie Title needs more characters!');
   }
   if ($rating > 10 || $rating < 0 || $rating === '') {
      // if not a number between 0 and 10, return!
      return alert('Please select a rating between 0 and 10');
   }
   $('#results').append(
      `<div>Movie: ${$title} / Rating: ${$rating} <button>Delete</button></div>`
   );
});

$('#results').on('click', 'button', function () {
   $(this).parent().eq(0).remove();
});

// Further Study
// Was not able to figure out how to alphabetically sort the results
