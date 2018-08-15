/**
 * @file 主文件js
 * @author rock zhang
*/
$(document).ready(function(){
    const demoList = [
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            href: './demoList/画廊幻灯片/index.html',
            img: './demoList/画廊幻灯片/index.png'
        },
        {
            title: '3D轮播图',
            details: '3D轮播图3D轮播图',
            href: './demoList/3Dbanner/index.html',
            img: './demoList/3Dbanner/3Dbanner.png'
        },
        {
            title: '苹果商品展示',
            details: '苹果商品展示 苹果商品展示',
            href: './demoList/苹果商品展示/index.html',
            img: './demoList/苹果商品展示/index.png'
        },
        {
            title: '字符画',
            details: '字符组成的画 字符组成的画',
            href: './demoList/字符画/index.html',
            img: './demoList/字符画/index.png'
        },
        {
            title: '3D折纸菜单',
            details: '3D折纸菜单 3D折纸菜单',
            href: './demoList/3D折纸菜单/index.html',
            img: './demoList/3D折纸菜单/index.png'
        },
    ]
    let _demoList = $('#demo-list');

    let renderDemoList = () => {
        let html = ``;
        demoList.forEach((v, i) => {
            let img = v.img ? v.img : 'https://api.vtrois.com/image/500x400?text=No cover';
            html += `<a class="demo-box" target="_blank" href="${v.href || ''}">
                <div class="demo-box-img">
                    <img src="${img}" alt="">
                </div>
                <div class="demo-box-title">
                    <h3>${v.title}</h3>
                    <p>${v.details}</p>
                </div>
            </a>`
        });
        _demoList.html(html);
    }

    renderDemoList();

});




