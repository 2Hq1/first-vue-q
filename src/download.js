/*
 * @Author: “2Hq1” 274895084@qq.com
 * @Date: 2023-02-22 15:56:55
 * @LastEditors: “2Hq1” 274895084@qq.com
 * @LastEditTime: 2023-02-22 16:09:54
 * @FilePath: \url-Bili\download.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { download } = require("bilibili-download-nodejs");

download ({
    downloadRange: "byVedio",
    downloadType: "mp4",
    downloadPath: "https://www.bilibili.com/video/BV1XX4y1X7Xo/?spm_id_from=333.1007.tianma.1-3-3.click&vd_source=1682bd5af7ad39176cd0631da072a4cd",
}).then(()=>{
    console.log("下载成功")
}).catch(()=>{console.log("下载失败")})