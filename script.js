window.addEventListener("load", function() {
    // ページがロードされたら、ローダーを非表示にする
    document.getElementById("loader").style.display = "none";  // ローダーを非表示にする
    // クラス「loaded」を追加する処理（既存のコード）
    document.body.classList.add("loaded");
});
