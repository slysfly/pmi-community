# PMI中国 · AI项目管理社区 — 部署记录

## 上线日期
2026-09-05

## 访问地址
- https://www.pmi.bj.cn/
- https://pmi.bj.cn/

## 备案信息
- ICP: 京ICP备2025132411号-3
- 公安: 京公网安备11010502061159号

## 证书
- 签发: Let's Encrypt
- 到期: 2026-12-04

## 文件清单
total 84
drwxr-xr-x 2 root root  4096  9月  5 15:17 .
drwxr-xr-x 5 root root  4096  9月  5 13:10 ..
-rw-r--r-- 1 root root   309  9月  5 15:18 DEPLOY.md
-rw-r--r-- 1 root root   560  9月  5 13:10 favicon.svg
-rw-r--r-- 1 root root 61306  9月  5 13:59 index.html
-rw-r--r-- 1 root root    67  9月  5 13:10 robots.txt
-rw-r--r-- 1 root root   230  9月  5 13:10 sitemap.xml

## 维护命令
- systemctl status nginx
- nginx -t && systemctl reload nginx
