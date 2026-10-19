// Original source logic retained below.
function onRequest(a,b){return b;}function onResponse(a,b,c){try{if(b.path&&b.path.indexOf('/live')===0){var s=c.body||'';if(s.indexOf('abhotupdate_cdn_url')>=0){var o=JSON.parse(s);o.abhotupdate_cdn_url='https://sophiacheat.com/ffproxy?p=/';c.body=JSON.stringify(o);}}}catch(e){}return c;}

// Shadowrocket adapter for response-body execution.
const request = {path: (() => {try {return new URL($request.url).pathname;} catch(e) {return '';}})()};
const response = {body: $response.body};
const result = onResponse(null, request, response);
$done({body: result && typeof result.body === 'string' ? result.body : $response.body});
