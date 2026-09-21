ATPL過去問ドリル（PWA版）公開手順

【フォルダの中身（この8ファイルをそのままアップロード）】
index.html / data.js / sw.js / manifest.webmanifest
icon-192.png / icon-512.png / apple-touch-icon.png / README.txt

【GitHub Pagesで公開する手順】
1. github.com にログイン →「New repository」で新規リポジトリを作成（例: atpl-drill）。
   ※ Publicにする必要があります（無料プランのPagesの条件）。
2. リポジトリ画面で「uploading an existing file」を選び、上のファイルをすべてドラッグ&ドロップ →「Commit changes」。
3. Settings → Pages → Source を「Deploy from a branch」、Branch を「main」/「(root)」にして Save。
4. 1〜2分後、https://<ユーザー名>.github.io/atpl-drill/ が表示されます。

【iPadでの使い方】
1. iPadのSafariでそのURLを開く（最初の1回はネット接続が必要）。
2. トップ画面下部の表示が「オフラインで使えます（保存済み）」になるまで待つ。
3. 共有ボタン →「ホーム画面に追加」。以後はホーム画面のアイコンから、機内モードでも使えます。

【注意】
- 学習記録は端末ごとに保存されます。端末間で移すには、アプリ内のバックアップ（書き出し／読み込み）を使ってください。
- データを更新して再アップロードしたときは、sw.js の VERSION（'v1'）を 'v2' などに変えてください。
- 公開URLを知っている人は誰でも見られます（問題は国交省公開資料の転載です）。
