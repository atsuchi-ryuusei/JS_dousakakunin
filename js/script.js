"use strict";

// header ナビゲーションのレスポンシブ対応、ハンバーガーメニュー
// 1. 定数の宣言
const hamburger = document.querySelector('.hamburger-icon');
const nav = document.querySelector('.p-global-nav');
// 2. 動作
hamburger.addEventListener('click', function(){
    document.body.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
});

// header リンククリック時の動作
// 1.定数 a要素の取得
const navLinks = document.querySelectorAll('.p-global-nav a');
// 2.動作
navLinks.forEach(function(link){
    link.addEventListener('click', function() {
        document.body.classList.remove('is-active');
        hamburger.classList.remove('is-active');
        nav.classList.remove('is-active');
    });
});

// footer メールアドレスのコピーボタン
// 1.定数の宣言
const copyBtn =document.querySelector('.js-copy-trigger');
const emailAddress = 'atsuchi.ryuusei@gmail.com';

// 2.振る舞いの定義
if (copyBtn) { // ボタンが存在するかチェックする
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emailAddress).then(() => {
            // クラスの付け外し
            copyBtn.classList.add('is-copied');
            setTimeout(() => {
                copyBtn.classList.remove('is-copied');
            }, 2000); // 2秒後にクラスを削除
        })
    });
}