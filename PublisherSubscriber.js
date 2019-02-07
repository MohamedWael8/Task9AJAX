var PublisherSubscriber = (function() {
    var PublisherSubscriber = {};
    function on(eventName, fn) {
      PublisherSubscriber[eventName] = PublisherSubscriber[eventName] || [];
      PublisherSubscriber[eventName].push(fn);
    }
  
    function off(eventName, fn) {
      if (PublisherSubscriber[eventName]) {
        for (var i = 0; i < PublisherSubscriber[eventName].length; i++) {
          if (PublisherSubscriber[eventName][i] === fn) {
            PublisherSubscriber[eventName].splice(i, 1);
            break;
          }
        }
      }
    }
    function emit(eventName, data) {
      if (PublisherSubscriber[eventName]) {
        PublisherSubscriber[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
    return {
      on: on,
      off: off,
      emit: emit
    };
  })();
  
  // PublisherSubscriber.on("peopleChanged", setStat);
  //  PublisherSubscriber.on("peopleChanged", someOtherHandler);
  // PublisherSubscriber.emit("peopleChanged" , 3);
  // var PublisherSubscriber = {"peopleChanged":[setStat,someOtherHandler]}