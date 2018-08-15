/**
 * @file 主文件js
 * @author rock zhang
*/
$(document).ready(function(){
    const demoList = [
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
        {
            title: '画廊幻灯片',
            details: '展示图片用的',
            img: '',
            url: ''
        },
    ]
    let _demoList = $('#demo-list');

    let renderDemoList = () => {
        let html = ``;
        demoList.forEach((v, i) => {
            let url = v.title ? `./demoList/${v.title}/index.png` : 'https://api.vtrois.com/image/500x400?text=No cover';
            html += `<a class="demo-box" target="_blank" href="./demoList/${v.title}/index.html">
                <div class="demo-box-img">
                    <img src="${url}" alt="">
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




