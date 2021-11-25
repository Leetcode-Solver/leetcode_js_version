/**
 * https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const arr = s.split(' ');
    const res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] && res.push(arr[i]);
    }
    return res.join(' ');
};