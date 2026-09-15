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

// header contactのスクロールアニメーション


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