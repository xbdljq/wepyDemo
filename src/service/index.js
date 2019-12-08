/*
 * @Description: 接口列表
 * @Author: biao
 * @Date: 2019-09-18 16:38:34
 */

import wxRequest from '@/utils/wxRequest'
import { APIHOST, APIHOST1 } from '@/utils/config'

export default {
    /** 检测token是否失效 */
    checkToken: data => wxRequest(data, `${APIHOST}app/wx/checkToken`, 'GET'),
    /** 获取登录信息 */
    getLoginMes: data => wxRequest(data, `${APIHOST}app/wx/login`, 'GET'),
    /**======== 首页 ========*/
    index: {
        /** 接口一 */
        api010: data => wxRequest(data, `${APIHOST}app/query/api010`, 'GET'),

        /** 接口二*/
        api012: data => wxRequest(data, `${APIHOST}app/query/api012`, 'GET'),
        getSwiper: data => wxRequest(data, `${APIHOST}app/query/api012`, 'GET'),

    },
    /**======== 首页 ========*/

    /**======== 手机绑定 ========*/
    bind: {
        /** 发送验证码 */
        sendCode: data => wxRequest(data, `${APIHOST}app/user/sendCode`, 'GET'),

        /** 手机绑定 */
        bindMobile: data => wxRequest(data, `${APIHOST}app/user/bindMobile`, 'POST'),

        /** 手机更换 */
        reBindMobile: data => wxRequest(data, `${APIHOST}app/user/reBindMobile`, 'POST')
    },
    /**======== 手机绑定 ========*/

    /**======== 已订业务 ========*/
    ordered: {
        /** 增值业务 */
        api005: data => wxRequest(data, `${APIHOST}app/query/api005`, 'GET'),
        /** 附属销售品，订阅活动 */
        api006: data => wxRequest(data, `${APIHOST}app/query/api006`, 'GET')
    },
    /**======== 已订业务 ========*/

    /**======== 办理业务 ========*/

    /**======== 办理业务 ========*/

}