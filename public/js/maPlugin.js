(function ($){
  $.fn.drawUsers = function (options){
    
    var settings = $.extend({
      data: undefined,
      op: 0
    }, options);

    var container = this;

    if (settings.data === undefined){
      alert('drawUsers error');
    }else{
      var div = '';
      $.each( settings.data.entities, function( index, value ) {
        var points = 0;
        div = '<div class="list-group-item"><h4 class="list-group-item-heading">'+value.properties.username+'</h4><ul class="list-group">'
        $.each( value.entities, function( index, value ) {
          div += '<li class="list-group-item">'+value.properties.name+': '+value.properties.amount+'</li>';
          if (settings.op !== 1)
            points += parseInt(value.properties.points)*parseInt(value.properties.amount);
        });
        if (settings.op !== 1)
          div += '<h5 class="list-group-item-heading">Points: </h5><spam class="badge">'+points+'</spam></ul></div>'
        else
          div += '</ul></div>';
        $(container).append(div);
      });
    }

    return this;
  };
}(jQuery));