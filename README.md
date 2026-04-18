# NLUIGUI_2 Prototype

初期画面は [index.html](/Users/user1/Desktop/NLUIGUI_2/prototype/index.html) です。

実装内容:

- Home 画面を初期表示に設定
- 各画面の左上の戻るボタンから Home に戻れる導線を設定
- `2_GR&KW_T` の左上タグを `鮭 20分以内` に修正
- `2_V1` は初期色 `#D36B46`、押下後は `#FADFCA` に変化して 3 秒後に結果へ遷移
- `2_T` は実機スマホのキーボード表示を前提に、入力欄がキーボードの上へ追従
- `viewport-fit=cover` と `100dvh` ベースでスマホサイズに追従

スマホで確認する方法:

1. [start-server.command](/Users/user1/Desktop/NLUIGUI_2/prototype/start-server.command) を実行
2. 同じ Wi-Fi 内のスマホで `http://PCのIPアドレス:8000/` を開く

GitHub Pages で公開する方法:

1. `/Users/user1/Desktop/NLUIGUI_2/prototype` を GitHub リポジトリとして push
2. GitHub の `Settings` → `Pages` を開く
3. `Build and deployment` で `Deploy from a branch` を選ぶ
4. Branch は `main`、Folder は `/ (root)` を選ぶ
5. 数分後に発行される公開 URL を共有する
