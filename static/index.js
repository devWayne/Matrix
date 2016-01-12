$(function() {
  var iframe = document.createElement('iframe');
  iframe.id = "iframe1";
  iframe.name = "iframe1";
  //iframe.src="./pages/template.html";
  document.body.appendChild(iframe);
  iframe.contentWindow.document.write(content);
  var iframeBodyEl = iframe.contentWindow.document.getElementsByTagName('body');
  $iframe = $(iframeBodyEl);
  $iframe.append('<div>12312312</div>');
});


//mock
var content = '<html><head><meta charset="UTF-8"></head><body><div>Template</div></body></html>';
