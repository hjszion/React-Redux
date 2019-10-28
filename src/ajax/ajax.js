//ajax get-request
function ajaxGet(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    }
}

// 调用
ajaxGet('/user.json', function (data) {
    console.log(data);
});

//ajax post-request
function ajaxPost(url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    }
}

// 调用
ajaxPost('/api/user', 'id=9&com=aicoder', function (data) {
    // 后台返回的数据就是 字符串类型。要转成json，必须自己手动转换。
    var user = JSON.parse(data);
    console.log(user.id);
    console.log(user.com);
});