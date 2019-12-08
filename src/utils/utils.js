/*
 * @Author: LiangJQ
 * @Date: 2019-09-19 11:28:59
 * @Description: 全局公共方法
 */
import wepy from 'wepy';

const tips = {
        toast: function(text) {
            wepy.showToast({
                title: text,
                icon: 'none',
                duration: 5000
            })
        }
    }
    /**
     * [formatDate description]
     * @param  {[String]} fmt  [格式化模版]
     * @param  {[String | Object]} date [时间戳或者日期对象]
     * @return {[String]}      [格式后的时间字符串]
     */
function formatDate(fmt, date) {
    date = typeof date == 'object' ? date : new Date();
    var o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
}


module.exports = {
    tips,
    formatDate
}