console.log('第一次测试');
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GEt', '/style.css');
    request.onreadystatechange = () => {
        console.log(request.response);
        if (request.readyState === 4) {
            console.log('成功了');
            if (request.status >= 200 && request.status < 300) {
                console.log(request.status);
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style);
            }
        } else {
            console.log('失败了');
        }
    };
    request.send();
};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GEt', '/2.js');
    request.onreadystatechange = () => {
        console.log(request.response);
        if (request.readyState === 4) {
            console.log('成功了');
            if (request.status >= 200 && request.status < 300) {
                console.log(request.status);
                const script = document.createElement('script');
                script.innerHTML = request.response;
                document.head.appendChild(script);
            }
        } else {
            console.log('失败了');
        }
    };
    request.send();
};
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GEt', '/3.html');
    request.onreadystatechange = () => {
        console.log(request.response);
        if (request.readyState === 4) {
            console.log('成功了');
            if (request.status >= 200 && request.status < 300) {
                console.log(request.status);
                const div = document.createElement('div');
                div.innerHTML = request.response;
                document.body.appendChild(div);
            }
        } else {
            console.log('失败了');
        }
    };
    request.send();
};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GEt', '/4.xml');
    request.onreadystatechange = () => {
        console.log(request.response);
        if (request.readyState === 4) {
            console.log('成功了');
            if (request.status >= 200 && request.status < 300) {
                console.log(request.status);
                const dom = request.responseXML;
                // 4.xml 获取warning里面的Hello World,记住getElementsByTagName获取伪数组
                const test = dom.getElementsByTagName('warning')[0].textContent;
                console.log(test);
            }
        } else {
            console.log('失败了');
        }
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GEt', '/5.json');
    request.onreadystatechange = () => {
        console.log(request.response);
        if (request.readyState === 4) {
            console.log('成功了');
            if (request.status >= 200 && request.status < 300) {
                console.log(request.status);
                // 先请求一个对像,然后用JSON.parse
                const object = JSON.parse(request.response);
                console.log(object);
                // AJex 请求, 网页欢迎XXX 到来  就用这种技术
                myName.textContent = object.name;
            }
        } else {
            console.log('失败了');
        }
    };
    request.send();
};
let n = 1;
getpage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GEt', `/page${n + 1}`);    //直接写page2 即可
    request.onreadystatechange = () => {
        console.log(request.response);
        if (request.readyState === 4 && request.status === 200) {
            console.log('成功了');
            const array = JSON.parse(request.response); // JSON变成数组 ,数组每一项插ul 后面即可
            array.forEach(item => {   // 对于数组每一项,每一项他的名字叫 item
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n = n + 1;
        }
    };
    request.send();
};