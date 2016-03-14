function drawRow(object){
    var a = document.createElement('a');
    a.href = object.link;

    var line = document.createElement('div');
    line.className = "line";

    var row = document.createElement('row');
    var column = document.createElement('column');
    var cols = document.createAttribute('cols');
    cols.value = '12';
    column.setAttributeNode(cols);

    var icon = document.createElement('div');
    icon.className = "icon";
    icon_unicode = document.createTextNode(object.icon);
    icon.appendChild(icon_unicode);

    var line_title = document.createElement('div');
    line_title.className = "line_title";
    title = document.createTextNode(object.title);
    line_title.appendChild(title);

    var line_subtitle = document.createElement('div');
    line_subtitle.className = "line_subtitle";
    subtitle = document.createTextNode(object.subtitle);
    line_subtitle.appendChild(subtitle);

    var chevron = document.createElement('div');
    chevron.className = 'chevron';
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

function createFooter(){
    //given an array, create X links and append them to the footer
}