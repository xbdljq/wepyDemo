/*
 * @Author: LiangJQ
 * @Date: 2019-10-29 15:24:51
 * @Description: 
 */
import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
    data = {
        mixin: 'This is mixin data.'
    }
    methods = {
        tap() {
            this.mixin = 'mixin data was changed'
            console.log('mixin method tap')
        },
        async checkLogin() {
            let res = await api.checkToken();
            if (res.code === 401) {
                try {
                    let _res = await wepy.login();
                    if (_res.code) {
                        console.log(_res)
                        let mes = await api.getLoginMes({ code: _res.code });
                        if (mes.code === 0) {
                            wx.setStorageSync('userInfo', { openId: mes.openId, token: mes.token, userTel: mes.wxUser.mobileNo, avatarUrl: mes.wxUser.headImgUrl });
                            return true;
                        } else if (mes.code === 99) {
                            //根据业务需要跳转的页面
                            //wx.navigateTo({ url: '/pages/Bind' });
                            return false;
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            return true;
        }
    }

    onShow() {
        console.log('mixin onShow')
    }

    onLoad() {

        console.log(this)
        console.log(this.fun1())
        console.log('mixin onLoad-----')
    }
    fun1() {
        console.log("--我是fun1111--")
    }
    async checkLogin() {
        let res = await api.checkToken();
        if (res.code === 401) {
            try {
                let _res = await wepy.login();
                if (_res.code) {
                    console.log(_res)
                    let mes = await api.getLoginMes({ code: _res.code });
                    if (mes.code === 0) {
                        wx.setStorageSync('userInfo', { openId: mes.openId, token: mes.token, userTel: mes.wxUser.mobileNo, avatarUrl: mes.wxUser.headImgUrl });
                        return true;
                    } else if (mes.code === 99) {
                        //根据业务需要跳转的页面
                        //wx.navigateTo({ url: '/pages/Bind' });
                        return false;
                    }
                }
            } catch (e) {
                console.log(e);
            }
        }
        return true;
    }

}