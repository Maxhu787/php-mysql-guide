---
title: Week 1 - 前置作業、網頁介紹、基礎HTML
tags: [社團]

---

---
title: Week 1 - 前置作業、網頁介紹、基礎HTML
---

## Week 1 - 網頁介紹、基礎HTML

speaker: 胡凱翔

---

# 前置作業

----

## 安裝 XAMPP
![xampp-download](https://hackmd.io/_uploads/B1A9us98gl.png)

----

## 安裝 VSCode
![vscode-download](https://hackmd.io/_uploads/rJyiOiqUgx.png)

---

# 網頁介紹

- HTTP protocol
- URL structure
- request responce cycle
- Internet standards 

---

## HTTP - Hypertext Transfer Protocol

----

## HTTP
- 為網頁而發明 - 用來擷取 HTML、圖片、文件
- 擴展至除了處理文件還可以處理資料 - APIs、RSS、Webhooks 服務等。

----

### 基本概念:
<span style="color: #de3355;">建立連線 → 請求文件 → 收到文件 → 關閉連線</span>

---

## URL - Uniform Resource Locator

----

### aka "網址"
![url-chrome](https://hackmd.io/_uploads/S1YHk2cUll.png)

----

![url-structure](https://hackmd.io/_uploads/HJ8HJh5Igl.png)

---

## 從伺服器取得資料

----

- 每當使用者點擊一個連結以切換到新頁面時，瀏覽器會與網頁伺服器建立連線，並發送一個「GET」請求，向指定的 URL 取得該頁面的內容。
- 伺服器會再將 HTML 文件回傳給瀏覽器，瀏覽器再將該文件格式化並顯示給使用者。

----

![get-1](https://hackmd.io/_uploads/HyWWX2cIeg.png)

----

![get-2](https://hackmd.io/_uploads/Hy7ZX358ee.png)

----

![get-3](https://hackmd.io/_uploads/SJv-mn5Ugl.png)

----

![get-4](https://hackmd.io/_uploads/HyK-Q398el.png)

----

![get-5](https://hackmd.io/_uploads/By2-Q39Ixg.png)

---

## 網際網路標準

所有網際網路協定（運作機制）的標準由IETF(www.ietf.org)組織制定。


HTTP 2.0 (https://www.rfc-editor.org/rfc/rfc7540)

---

## 開發員工具

熟悉瀏覽器開發員工具

鍵盤按 <span style="color: #de3355;">```Ctrl + Shift + i```</span>
或 <span style="color: #de3355;">```右鍵 -> 檢查```</span>

----

![devtools](https://hackmd.io/_uploads/r1T8gacLxe.png)

---

# 基礎 HTML

----

## HTML 是什麼？

* **HTML (HyperText Markup Language)** 用來建立網頁結構的標記式語言。
* 描述**內容結構**：標題、段落、清單、圖片、連結等。

----

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

----

## HTML 標籤基礎


<span style="font-size: 30px;">標籤必須使用小寫字母, 屬性必須引號括起來, 標籤必須關閉</span>

![tag-rules](https://hackmd.io/_uploads/SJeuCG69Lxg.png)

----

## 常見 HTML 標籤

```html
<h1>標題</h1>
```
```html
<p>段落文字</p>
```
```html
<a href="https://example.com">連結</a>
```
```html
<img src="dog.png" alt="dog"/>
```

---

### references
- https://www.wa4e.com/materials
- https://www.wa4e.com/lessons/html
- https://www.wa4e.com/lessons/rrc

