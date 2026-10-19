// Original source logic retained below.
function onRequest(a,b){return null;}function onResponse(a,b,c){return c;}

// Shadowrocket adapter for response-body execution.
const request = {path: (() => {try {return new URL($request.url).pathname;} catch(e) {return '';}})()};
const response = {body: $response.body};
const result = onResponse(null, request, response);
$done({body: result && typeof result.body === 'string' ? result.body : $response.body});
