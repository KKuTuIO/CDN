window.fbAsyncInit = function () {
    FB.init({
        appId: '1383074675107299',
        xfbml: true,
        version: 'v2.8'
    });
    if (document.getElementById("facebook-menu")) {
        document.getElementById("facebook-menu").addEventListener("click", function () {
            FB.ui({
                    method: 'share',
                    href: 'http://xn--vz0b065d.xn--3e0b707e',
                },
                function (response) {
                    if (response && !response.error_message) {
                        console.log('Posting completed.');
                    } else {
                        console.log('Error while posting.');
                    }
                });
        });
    }
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/ko_KR/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
