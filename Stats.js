var stats = (function IIFE() 
{
    var model = null;

    var statsTemplate = $('#statsTemplate').html();
    var $target = $('#stats');

    PublisherSubscriber.on('_search',function(element){_changeModel(element)});
    console.log('Started stats');
    _render();
    

    function _render()
    {
        if(model != null)
        {
            Mustache.parse(statsTemplate);  
            var rendered = Mustache.render(statsTemplate, model);
            $target.html(rendered);
        }
        console.log('Current Model '+model);
    }
    
    function _changeModel(movie)
    {
        console.log('Entered Change Model');
        model=movie;
        _render();
    }
    
    return
    {
        

    }

}
)();

stats;
