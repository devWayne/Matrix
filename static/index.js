$(function() {
    var iframe = document.createElement('iframe');
    var $iframe
    iframe.id = "iframe1";
    iframe.name = "iframe1";
    document.body.appendChild(iframe);


    fetch('/api/getlayout').then((res) => {
            return res.json()
        })
        .then((res) => {
            iframe.contentWindow.document.write(res.layout);
            var iframeBodyEl = iframe.contentWindow.document.getElementsByTagName('body');
            $iframe = $(iframeBodyEl);
        });


    $('.J_add_module').on('click', (e) => {
        fetch('/api/getModules').then((res) => {
            return res.json();
        }).then((res) => {
            $iframe.append(res.layout);
        });
    });

    $('.J_publish').on('click', (e) => {
        fetch('/api/publishPage', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page: iframe.contentWindow.document.documentElement.outerHTML,
            })
        })
    });


});
