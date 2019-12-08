/*
 * @Author: LiangJQ
 * @Date: 2019-12-08 15:52:26
 * @Description: 网络请求逻辑处理
 */

import wepy from 'wepy';
import { tips } from '@/utils/utils'
import { APIHOST } from '@/utils/config'

//

const wxRequest = async(data = {}, url, method = 'GET', header = {}) => {

    let { hideLoad, ..._data } = data;

    /** 当hideLoad为true时，不显示加载中图标 */
    if (!hideLoad) {
        wepy.showLoading({
            title: '加载中',
            mask: true
        })
    }
    let options = { url, method, data: _data };

    /** 获取token */
    let userInfo = wx.getStorageSync('userInfo');
    if (userInfo && userInfo.token) {
        header.token = userInfo.token;
    }

    options.header = header;

    let res = await wepy.request(options);

    if (res.data && res.data.code != 0) {
        tips.toast(res.data.msg);
    }

    if (!hideLoad) {
        wepy.hideLoading();
    }

    return res.data;

}

module.exports = wxRequest;