/*

*/
function createDiv(div_class){
    a = document.createElement('div');
    a.className = div_class;
    return a;
}

function createLink(href){
    a = document.createElement('a');
    a.href = href;
    return a;
}

function updateText(id,new_text){
    document.getElementById(id).innerHTML = new_text;
}

function updateTitles(object){
    updateText('title_text',object.title);
    updateText('subtitle_text',object.subtitle);
}

function creatRow(object){
    var a = createLink(object.link);
    var onclick = document.createAttribute('onclick');
    onclick.value = 'changeId('+object.link_id+')';
    a.setAttributeNode(onclick);

    var line = createDiv('line');

    var row = document.createElement('row');
    var column = document.createElement('column');
    var cols = document.createAttribute('cols');
    cols.value = '12';
    column.setAttributeNode(cols);

    var icon = createDiv('icon');
    icon_unicode = document.createTextNode(object.icon);
    icon.appendChild(icon_unicode);

    var line_title = createDiv('line_title');
    title = document.createTextNode(object.title);
    line_title.appendChild(title);

    var line_subtitle = createDiv('line_subtitle');
    subtitle = document.createTextNode(object.subtitle);
    line_subtitle.appendChild(subtitle);

    var chevron = createDiv('chevron');
    chevron_text = document.createTextNode('\u232A');
    chevron.appendChild(chevron_text);

    column.appendChild(icon);
    column.appendChild(line_title);
    column.appendChild(line_subtitle);
    column.appendChild(chevron);

    row.appendChild(column);
    line.appendChild(row);
    a.appendChild(line);

    return a;
}

function appendToDiv(id, element){
    div = document.getElementById(id);
    div.appendChild(element)
}

var generateRows = function(rows){
    rows.forEach(function(row){
        var new_row = creatRow(row);
        appendToDiv('lines',new_row);
    })
}
function createFooter(){
    //given an array, create X links and append them to the footer
}

function filterObject(object, column, value){
    return object.filter(function(d){return d[column] == value;});
}