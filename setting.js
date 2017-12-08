/**
 * Created by Administrator on 2017/12/8.
 */
//数据库配置信息
module.exports = {
    cookieSecret:'yf',//加密cookie使用的字符串
    db:'blog',//数据库名称
    host:'localhost',//数据库地址
    port:27017 //端口号
}
//我们把数据库的配置信息写在这里，是为了在连接数据库的时候，一旦数据库的地址或者是名称或者是端口号
//发生变化时，我们只需要改这里就可以