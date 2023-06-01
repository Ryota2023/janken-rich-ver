var c_counter1 = 174;  // 現在挑戦中のチャレンジャー数　初期値
var c_counter2 = 25;  // チャレンジ達成者の数　初期値
var c_counter3 = 63;  // チャレンジ残念ながら今回は達成しなかった人　初期値

// 現在挑戦中のチャレンジャーをhtmlに表示させる
var cv1 = document.getElementById("counterValue1");
cv1.textContent = c_counter1;

// チャレンジ達成数をhtmlに表示させる
var cv2 = document.getElementById("counterValue2");
cv2.textContent = c_counter2;

// 残念ながら今回は達成しなかった人の数をhtmlに表示させる
var cv3 = document.getElementById("counterValue3");
cv3.textContent = c_counter3;

button_1 = 0
// チャレンジする内容は決まりましたかで「はい」を押した場合
$(".button-yes").on("click", function (){
    var button_1 = 1;
    console.log(button_1,"「はい」を押しました");
    $(".title-m").html("かしこまりました！それではあなたがチャレンジしてみたいことを書いてみてください！");
    clapSound1.play(); 
    })

// チャレンジする内容は決まりましたかで「いいえ」を押した場合＊＊＊＊＊＊＊
$(".button-no").on("click", function (){
    var button_1 = 2;
    console.log(button_1,"「いいえ」を押しました");
    $(".title-m").html("かしこまりました〇〇様、もしトライしてみたくなった時はいつでも参加してみて下さい！");
    })
// チャレンジする内容は決まりましたかで「何をしたらいいのか・・」を押した場合＊＊＊
$(".button-noidea").on("click", function (){
    var button_1 = 3;
    console.log(button_1,"「何をしたらいいのか・・」を押しました");
    $(".bouken").html("かしこまりました〇〇様、ものは試し、今からランダムにチャレンジ内容を表示させて頂きます。そちらを見て一度ご検討頂くのはいかがでしょうか？");
    })


// ランダムに新しいプランを選択する＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
$(".button-random").on("click", function (){
     var random = Math.floor(Math.random() * 10 + 1);
    console.log(random, "ランダムな数字の箱");
    
if (random === 1) {
    console.log("random");
    $(".new_plan").html ("週１回以上、町のボランティア活動に参加してみよう！");
    clapSound1.play();  
    }
else if (random === 2) {
    console.log("random");
    $(".new_plan").html ("８か所以上の東京都内の美術館、博物館巡りをしてみよう！");
    clapSound1.play();  
    }
else if (random === 3) {
    console.log("random");
    $(".new_plan").html ("毎日朝５時に起きてみよう!");
    clapSound1.play();  
    }     
else if (random === 4) {
    console.log("random");
    $(".new_plan").html ("中国語の勉強をして、中国語検定４級に合格してみよう！");
    clapSound1.play();  
    } 
else if (random === 5) {
    console.log("random");
    $(".new_plan").html ("英語の勉強をして、マーティンルーサーキングの歴史に残る名演説をカンペなして、話せるようになってみよう！");
    clapSound1.play(); 
        }  
else if (random === 6) {
    console.log("random");
    $(".new_plan").html ("毎週上る山を決めて、頂上を目指そう！");
    clapSound1.play(); 
} 
else if (random === 7) {
    console.log("random");
    $(".new_plan").html ("自分が受けてもいいと思うご当地検定を受けてみよう！");
    clapSound1.play(); 
}
else if (random === 8) {
    console.log("random");
    $(".new_plan").html ("あいみょんのマリーゴールドをギターで弾き語りできるようになってみよう！");
    clapSound1.play(); 
} 
else if (random === 9) {
    console.log("random");
    $(".new_plan").html ("週に一回休みの日に、自転車で片道３０Kmの旅にでて、海の写真を撮りに行ってみよう！");
    clapSound1.play(); 
}
else if (random === 10) {
    console.log("random");
    $(".new_plan").html ("１か月間、どんなダンスでもいいので、ダンス教室に通って踊れるようになってみよう！");
    clapSound1.play(); 
}


})
