/*
 * @Author: LiangJQ
 * @Date: 2019-10-14 18:22:17
 * @Description: 
 */
import wepy from 'wepy'
import api from '@/service'

export default class checkLogin extends wepy.mixin {
    async checkLogin() {
        let res = await api.checkToken();
        if (res.code === 401) {
            try {
                let _res = await wepy.login();
                if (_res.code) {
                    console.log(_res)
                        //这里是请求获取登录的接口信息
                        // let mes = await api.getLoginMes({ code: _res.code });
                        // if (mes.code === 0) {
                        //     wx.setStorageSync('userInfo', {
                        //         openId: mes.openId,
                        //         token: mes.token,
                        //         userTel: mes.wxUser.mobileNo,
                        //         avatarUrl: mes.wxUser.headImgUrl
                        //     });
                        //     return true;
                        // } else if (mes.code === 99) {
                        //     //根据业务需要跳转的页面
                        //     //wx.navigateTo({ url: '/pages/Bind' });
                        //     return false;
                        // }
                }
            } catch (e) {
                console.log(e);
            }
        }
        return true;
    }
}