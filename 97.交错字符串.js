/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 *
 * https://leetcode-cn.com/problems/interleaving-string/description/
 *
 * algorithms
 * Medium (45.51%)
 * Likes:    582
 * Dislikes: 0
 * Total Accepted:    64.8K
 * Total Submissions: 142.5K
 * Testcase Example:  '"aabcc"\n"dbbca"\n"aadbbcbcac"'
 *
 * 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。
 * 
 * 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：
 * 
 * 
 * s = s1 + s2 + ... + sn
 * t = t1 + t2 + ... + tm
 * |n - m| 
 * 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 +
 * ...
 * 
 * 
 * 提示：a + b 意味着字符串 a 和 b 连接。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s1 = "", s2 = "", s3 = ""
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 0 
 * s1、s2、和 s3 都由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const [l1, l2, l3] = [s1.length, s2.length, s3.length];
    if(l1+l2 !== l3) return false;
    const dp = new Array(l1+1).fill(0).map(item => new Array(l2+1).fill(0));
    dp[0][0] = true;
    for(let i = 0; i <= l1; i++) {
        for(let j = 0; j <= l2; j++) {
            if(i > 0) dp[i][j] = dp[i][j] || dp[i-1][j] && s1[i-1] === s3[i+j-1];
            if(j > 0) dp[i][j] = dp[i][j] || dp[i][j-1] && s2[j-1] === s3[i+j-1];
        }
    }
    return dp[l1][l2];
};
// @lc code=end