# Bilibili CSRF Token 获取脚本

在 B 站任意页面一键获取 CSRF Token（`bili_jct`）并自动复制到剪贴板。

## 使用方法

1. 在浏览器中打开 B 站任意页面（确保已登录）
2. 按 `F12` 打开控制台（Console）
3. 将 `get_csrf.js` 的内容完整粘贴到控制台，按回车
4. CSRF Token 会自动复制到剪贴板，同时也会打印在控制台中

## 为什么需要这个

B 站的部分操作（取消关注、删除评论等）需要 CSRF Token 做身份校验。每次手动去 `Application → Cookies → bilibili.com → bili_jct` 翻找很麻烦，这个脚本一键搞定。

## 适用脚本

获取到的 CSRF Token 可直接用于以下脚本：

- [bilibili-unfollow](https://github.com/m4ku1337/bilibili-unfollow) — B 站批量取消关注
- [bilibili-delete-comments](https://github.com/m4ku1337/bilibili-unfollow) — B 站批量删除评论

## License

MIT
