const PROPERTIES_TITLE = "Properties";
const THEMING_TITLE = "Theming";
const ACTIONS_TITLE = "Actions";

function getEl(str) {
  let html = `<div class="md">${str}</div>`;
  return $(html);
}

export function getTitle(str) {
  let $el = getEl(str);

  let $title = $el.find('h1');
  let title  = getStrBetweenChars($title.text(), '{{', '}}');

  return title;
}

export function getDesc(str) {
  let $el = getEl(str);

  let $title = $el.find('h1');
  let $desc = $title.nextAll('p').first();

  return $desc.text();
}

/*
 * Convert HTML table to an object like this:
  {
    name: "value",
    type: "string",
    default: null,
    description: "is even cooler.",
  },
 */
export function getProperties(str) {
  let $el = getEl(str);

  let $title = $el.find(`h2:contains("${PROPERTIES_TITLE}")`);
  let $table = $title.nextAll('table').first();

  let json = getValuesFromTable($table);

  return json;
}

export function getActions(str) {
  let $el = getEl(str);

  let $title = $el.find(`h2:contains("${ACTIONS_TITLE}")`);
  let $table = $title.nextAll('table').first();

  let json = getValuesFromTable($table);

  return json;
}

/*
 * Convert HTML list to an object like this:
  {
    name: 'input',
    description: "Style the input box. This is very cool. We're almost there now.",
    demo: {
      backgroundColor: '#ffd9d5',
      color: 'blue',
    }
  }
 */
export function getTheming(str) {
  let $el = getEl(str);

  let $title = $el.find(`h2:contains("${THEMING_TITLE}")`);
  let $list = $title.nextAll('ul').first();

  let json = getStylingFromList($list);

  return json;
}

function getStylingFromList($list) {
  if (!$list.length) throw "No table found!";

  let classes = [];

  $list.find('li').each(function() {
    let $li = $(this);

    let className = $li.find('p code').first().text();
    // Remove "." from className
    className = className.substr(1);

    let desc = $li.find('p:nth-child(2)').html();
    desc = desc.replace(/\n/g, '<br>');

    let code = $li.find('pre').text();
    code = codeStrToObj(code);

    let row = {
      name: className,
      description: desc,
      demo: code,
    };

    classes.push(row);
  });

  return classes;
}

function getStrBetweenChars(str, firstChar, secondChar) {
  var startPos = str.indexOf(firstChar) + firstChar.length;
  var endPos = str.indexOf(secondChar, startPos);
  var newStr = str.substring(startPos, endPos);
  return newStr.trim();
}

function codeStrToObj(code) {
  let declarationsStr = getStrBetweenChars(code, "{", "}");
  let declarations = declarationsStr.split('\n');
  declarations = listToObjCSS(declarations);

  return declarations;
}

function listToObjCSS(declarations) {
  let css = {};

  declarations.forEach((decl) => {
    appendStrToObjCSS(css, decl); 
  });

  return css;
}

function appendStrToObjCSS(obj, str) {
  let colonIndex = str.indexOf(':');

  let prop = str.substr(0, colonIndex).trim();
  prop = dashToCamelCase(prop);
  let value = getStrBetweenChars(str, ':', ';').trim();

  obj[prop] = value;
}

function dashToCamelCase(str) {
  return str.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });
}

function getValuesFromTable($table) {
  if (!$table.length) throw "No table found!";

  let titles = [];

  $table.find('thead tr th').each(function() {
    let title = $(this).text().toLowerCase();
    titles.push(title);
  });

  let json = [];

  $table.find('tbody tr').each(function() {
    let $row = $(this);
    let row = {};

    $row.find('td').each(function(titleIndex) {
      let title = titles[titleIndex];
      let value = $(this).text();    

      row[title] = value;
    });

    json.push(row);
  });

  return json;

}

