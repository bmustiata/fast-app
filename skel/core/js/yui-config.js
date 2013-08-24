YUI_config = {
    filter: "raw",
    debug: true,
    combine: true,
    base: 'http://yui.yahooapis.com/3.10.3/build/',

    groups: {
        "custom-modules" : {
            base: '/build/',
            combine: false,

            modules: {
                'my-custom-module' : {
                    lang : ["de"]
                }
            }
        }
    }
};