$(function () {
    $.ajax({
        type: 'GET',
        url: '/static/data/menu.json',
        dataType: 'json', 
        success: function(res) {
            tree(res);
            console.log(res);
        },
        error: function(){ alert('error') } 
    })

    function tree(data) {
        for (var i = 0; i < data.length; i++) {
            //var data2 = data[i];
            if (data[i].relation == 'root') {
                $('#root_ul').append('<li class="root_li ' + data[i].type + '" data-name="' + data[i].type + '"><a href="' + data[i].url + '">' + data[i].name + '</a><i class="show_menu">&#x2B;</i><i class="hide_menu">&minus;</i></li>');
            } else {
                var children = $('li [data-name="' + data[i].parenttype + '"]').children('ul');
                if (children.length == 0) {
                    $('li[data-name="' + data[i].parenttype + '"]').append('<ul class="son_ul"></ul>')
                }
                $('li[data-name="' + data[i].parenttype + '"] > ul').append(
                    '<li class="son_li" data-name="' + data[i].name + '">' +
                    '<a href="' + data[i].url + '">' +data[i].name + '</a></li>')
            }
            for (var j = 0; j < data[i].child.length; j++) {
                var child = data[i].child[j];
                var children = $('li[data-name="' + child.parenttype + '"]').children('ul');
                if (children.length == 0) {
                    $('li[data-name="' + child.parenttype + '"]').append('<ul class="parent_ul"></ul>')
                }
                $('li[data-name="' + child.parenttype + '"] > ul').append(
                    '<li class="parent_li" data-name="' + child.type + '">' +
                    '<a href="' + data[i].url + '">' + child.name + ' &#xBB;</a><i class="show_menu"></i><i class="hide_menu"></i></li>')
                var child2 = data[i].child[j].child;
                tree(child2)
            }
            tree(data[i]);
        }
    }
});