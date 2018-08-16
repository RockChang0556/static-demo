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
        {
            title: '黑客代码雨',
            details: '黑客代码雨 黑客代码雨',
            href: './demoList/黑客代码雨/index.html',
            img: './demoList/黑客代码雨/index.png'
        },
        {
            title: '电商图片放大镜',
            details: '电商图片放大镜 电商图片放大镜',
            href: './demoList/电商图片放大镜/index.html',
            img: './demoList/电商图片放大镜/index.png'
        },
        {
            title: '楼层效果',
            details: '楼层效果 楼层效果',
            href: './demoList/楼层/index.html',
            img: './demoList/楼层/index.png'
        },
        {
            title: '瀑布流',
            details: '瀑布流 瀑布流',
            href: './demoList/瀑布流/index.html',
            img: './demoList/瀑布流/index.png'
        },
        {
            title: '九宫格-拖拽',
            details: '九宫格-拖拽 九宫格-拖拽',
            href: './demoList/九宫格 拖拽/index.html',
            img: './demoList/九宫格 拖拽/drag.png'
        },
        {
            title: '大学毕业项目',
            details: '大学毕业项目 大学毕业项目',
            href: './demoList/Group2/index.html',
            img: './demoList/Group2/group.png'
        },
        {
            title: 'miaov LOGO跳动',
            details: 'miaov-LOGO跳动 miaov-LOGO跳动',
            href: './demoList/miaov LOGO跳动/index.html',
            img: './demoList/miaov LOGO跳动/index.png'
        },
        {
            title: 'miaov-分页器',
            details: 'miaov-分页器 miaov-分页器',
            href: './demoList/miaov 分页器/index.html',
            img: './demoList/miaov 分页器/page.png'
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




