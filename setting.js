/**
 * Created by Administrator on 2017/12/8.
 */
//数据库配置信息
module.exports = {
    cookieSecret:'yf',
    db:'myblog', //数据库的名称
    host:'localhost',
    port:27017 //数据库的端口号
}
//我们把数据库的配置信息写在这里，是为了在连接数据库的时候，一旦
//数据库的地址或者是名称或者是端口号发生变化的时候，我们只需要改这里就可以了。