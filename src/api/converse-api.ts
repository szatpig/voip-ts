// Created by szatpig at 2019/5/21.
import fetch from './../utils/fetch'
import api from './../config'

const userLogin = (data:any)=> fetch(api.api + '/user/bindPhoneNumberForWxMp',{
    data
});

const sendSms = (params:any)=> fetch(api.api+ `/user/getCode/${ params.phoneNumber }`,{
    type:'get',
    params
});

export {
    userLogin,
    sendSms
}
