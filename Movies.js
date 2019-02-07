$(document).ready(
    function()
    {
        var movies = (function IIFE() 
        {
            var model = {
                data:[],
                urlBase:"https://api.themoviedb.org",
                urlKey:"api_key=1559be70a05c8f19263f6a30b261983e"
            }

            var $submit = $("#submit");
            var template = $('#template').html();
            var $target = $('#movie-list');
            _eventListeners();
            _render();
            
            function _eventListeners()
            {
                $submit.click(function()
                {
                    console.log("Click");
                    _search();
                });
            }

            function _render()
            {
                Mustache.parse(template);  
                var rendered = Mustache.render(template, model);
                $target.html(rendered);
            }
            
            function _search()
            {
                console.log("Searched");
                $.ajax({
                    method: "GET",
                    url: "https://api.themoviedb.org/3/trending/all/day?api_key=1559be70a05c8f19263f6a30b261983e"
                  }).done(function(data) {
                    data.results.forEach(element => {
                        model.data.push(element);
                      });
                  });
                  
                console.log(model.data);
                PublisherSubscriber.emit(_search,model.data.find(element => element.vote_average));
                _render();
            }

            return
            {
                

            }

        }
        )();

        movies;
    }
)