(function (window) {
    'use strict';

    /**
     * Loads images, scripts, styles, iframes, videos and audios asynchronously.
     * @param {NodeList} [nodes] - A NodeList of elements. By default, it is the result of `querySelectorAll('[data-async]'.
     * @returns {NodeList}
     */
    function asyncall(nodes) {

        nodes = nodes || window.document.querySelectorAll('[data-async]');

        var i = 0,
            len = nodes.length,
            src,
            node;

        for (i; i < len; i += 1) {
            node = nodes[i];
            src = (node.tagName) !== 'LINK' ? 'src' : 'href';
            node[src] = node.getAttribute('data-async');
            node.removeAttribute('data-async');
        }

        return nodes;
    }

    /**
     * Expose Shuffle
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('asyncall', [], function () {
            return asyncall;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = asyncall;

    // Default
    } else {
        window.asyncall = asyncall;
    }

}(this));