// Bilibili CSRF Token 快速获取脚本
// 使用方法：在B站任意页面按F12打开控制台，粘贴此代码，回车运行

(function() {
    function getCookie(name) {
        let cookies = document.cookie.split('; ');
        for (let c of cookies) {
            if (c.startsWith(name + '=')) {
                return decodeURIComponent(c.substring(name.length + 1));
            }
        }
        return null;
    }

    const csrf = getCookie('bili_jct');
    const uid = getCookie('DedeUserID');

    if (csrf) {
        console.log('========== 获取成功 ==========');
        console.log('CSRF Token:', csrf);
        console.log('UID:', uid || '未找到');
        console.log('==============================');

        // 用 textarea + execCommand 复制（兼容控制台未聚焦场景）
        let ta = document.createElement('textarea');
        ta.value = csrf;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            console.log('✅ CSRF Token 已复制到剪贴板！');
        } catch(e) {
            console.log('💡 请手动复制上方的 CSRF Token');
            console.log(csrf);
        }
        document.body.removeChild(ta);
    } else {
        console.warn('⚠ document.cookie 中未找到 bili_jct');
        console.log('请手动获取：F12 → Application → Cookies → bilibili.com → 找到 bili_jct，双击复制 Value');
    }
})();
