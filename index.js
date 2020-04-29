function matchSingle(pattern, text) {
  if(!pattern)
    return true;
  if(!text)
    return false;
  if(pattern === '.')
    return true;

  return pattern === text;
}

function matchQuestion(pattern, text) {
  return (
    (matchSingle(pattern[0], text[0]) && match(pattern.slice(2), text.slice(1)))
    || match(pattern.slice(2), text)
  );
}

function matchStar(pattern, text) {
  return (
    (matchSingle(pattern[0], text[0]) && match(pattern, text.slice(1)))
    || match(pattern.slice(2), text)
  );
}

function match(pattern, text) {
  if(pattern === '')
    return true;
  if(pattern === '$' && text === '')
    return true
  if(pattern[1] === '?')
    return matchQuestion(pattern, text);
  if(pattern[1] === '*')
    return matchStar(pattern, text);

  return matchSingle(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1));
}

function search(pattern, text) {
  if(pattern[0] === '^')
    return match(pattern.slice(1), text);
  return match('.*' + pattern, text);
}

exports.match = search;

