---
title: Week 1 - 網頁介紹、基礎HTML
sidebar_position: 1
---

# Week 1 - 網頁介紹、基礎 HTML

## 前置作業

### 安裝 XAMPP

![xampp-download](https://github.com/Maxhu787/gallery/blob/main/circ/week1/xampp-download.png?raw=true)

### 安裝 VSCode

![vscode-download](https://github.com/Maxhu787/gallery/blob/main/circ/week1/vscode-download.png?raw=true)

---

## 介紹內容

- HTTP/HTTPS
- 網址結構
- 請求/回應週期
- 網際網路標準

---

## Hypertext Transfer Protocol (HTTP)

### HTTP

- 為網頁而發明 - 用來擷取 HTML、圖片、文件
- 擴展至除了處理文件還可以處理資料 - APIs、RSS、Webhooks 服務等

### 基本概念

<span style={{ color: "#de3355" }}>建立連線 → 請求文件 → 收到文件 → 關閉連線</span>

---

## Uniform Resource Locator (URL)

### aka "網址"

![url-chrome](https://github.com/Maxhu787/gallery/blob/main/circ/week1/url-chrome.png?raw=true)

![url-structure](https://github.com/Maxhu787/gallery/blob/main/circ/week1/url-structure.png?raw=true)

---

## 請求/回應週期

- request response cycle
- 每當使用者點擊一個連結以切換到新頁面時，瀏覽器會與網頁伺服器建立連線，並發送一個「GET」請求，向指定的 URL 取得該頁面的內容。
- 伺服器會再將 HTML 文件回傳給瀏覽器，瀏覽器再將該文件格式化並顯示給使用者。

![get-1](https://github.com/Maxhu787/gallery/blob/main/circ/week1/get-1.png?raw=true)  
![get-2](https://github.com/Maxhu787/gallery/blob/main/circ/week1/get-2.png?raw=true)  
![get-3](https://github.com/Maxhu787/gallery/blob/main/circ/week1/get-3.png?raw=true)  
![get-4](https://github.com/Maxhu787/gallery/blob/main/circ/week1/get-4.png?raw=true)  
![get-5](https://github.com/Maxhu787/gallery/blob/main/circ/week1/get-5.png?raw=true)

---

## 網際網路標準

網際網路協定、運作機制標準  
IETF [www.ietf.org](https://www.ietf.org) 組織制定

- HTTP 2.0 → [RFC 7540](https://www.rfc-editor.org/rfc/rfc7540)

---

## 開發工具

熟悉瀏覽器開發工具

鍵盤按 <span style={{ color: "#de3355" }}>Ctrl + Shift + i</span>  
或 <span style={{ color: "#de3355" }}>右鍵 → 檢查</span>

![devtools](https://github.com/Maxhu787/gallery/blob/main/circ/week1/devtools.png?raw=true)

---

# 基礎 HTML

## HTML 是什麼？

- **HTML (HyperText Markup Language)**
- 網頁結構的標記式語言
- 描述 **內容結構**
  - 如: 標題、段落、清單、圖片、連結

---

## HTML 基本結構

```html
<!DOCTYPE html>
<html>
  <head>
    <title>標題</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>Some text here</p>
  </body>
</html>
```

```

small tip
在 VSCode 空白檔案輸入 `!` 然後按 `Tab` 就可以產生這個 HTML 模板

```

---

## HTML 標籤寫法

<span style={{ fontSize: "20px" }}>標籤都是小寫字母, 屬性必須引號括起來, 標籤必須關閉</span>

![tag-rules](https://github.com/Maxhu787/gallery/blob/main/circ/week1/tag-rules.png?raw=true)

---

## 常見 HTML 標籤

```html
<h1>標題</h1>
<p>段落文字</p>
<a href="https://example.com">連結</a>
<img src="dog.png" alt="dog" />
```

---

# End! 🙂

刷題時間 👉 [https://freecodecamp.org/](https://freecodecamp.org/)

---

## References

- [wa4e materials](https://www.wa4e.com/materials)
- [wa4e lessons HTML](https://www.wa4e.com/lessons/html)
- [wa4e lessons RRC](https://www.wa4e.com/lessons/rrc)
