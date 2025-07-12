      // ページがすべて読み込まれたら実行する
      window.onload = function () {
        // ID「setNum」の値が変わったときにsetNum関数を呼び出す
        document.getElementById("setNum").onchange = setNum;
      };

      // 数値を受け取って、計算結果を表示する関数
      function setNum(e) {
        // 入力値を整数に変換して num に入れる

        console.log("イベント発生！");
        console.log("どこで起きた？", e.target);
        console.log("何が選ばれた？", e.target.value);

        const num = parseInt(e.target.value);

        // 変数を使って計算する
        const v0 = 10 * num;//グミは10個ずつ増える
        const v1 = 200 + (num - 1) * 50; // サイダーは200 → 250 → 300...

        document.getElementById("i0").textContent = v0;//グミの個数
        document.getElementById("i1").textContent = v1;//サイダーの量
        document.getElementById("num").textContent = num;//1人前の数
      }