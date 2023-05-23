# react_tutorial

## 手順(Windows)

以下はWindows用。Mac用は最下部

### 必要ツールインストール

- PowerShellを**管理者権限で**起動
- 次を入力: `winget install Microsoft.WindowsTerminal`
- 次を入力: `winget install Microsoft.VisualStudioCode`

### WSL2インストール

- [WSL2を使用してUbuntuをインストールする - 半導体事業 - マクニカ](https://www.macnica.co.jp/business/semiconductor/articles/qualcomm/142363/)

### WSL設定

- Windows Terminal(ターミナル)を起動
- 画面上部タブ一覧の `▽` を押して `Ubuntu` を起動

以下のコマンドを入力して `systemd` を有効化する

```bash
echo "
[boot]
systemd=true
" | sudo tee /etc/wsl.conf
```

終わったらPowerShellで `wsl --shutdown` と入力し、WSL再起動

### Docker for Linux インストール

- Windows Terminal(ターミナル)を起動
- 画面上部タブ一覧の `▽` を押して `Ubuntu` を起動
- ↓の手順でWSLをインストール
  - [WSL2 Ubuntu に Docker をインストールする](https://zenn.dev/fehde/articles/ea0e8a0a0a1de4)
- 入力: `sudo service docker start`
  - Docker初回起動チェック。問題があれば誰かに聞こう
- 入力: `sudo systemctl enable docker`
  - Dockerデーモン自動起動
- PowerShellで `wsl --shutdown` と入力し、WSL再起動

### VSCodeインストール

- VSCodeを起動
- 次のExtensionを入れる
  - WSL
  - Docker
  - Git History
  - Remote SSH

### プロジェクト初期設定

VSCode再起動後、ウィンドウ左下の緑の `><` ボタンを押し、WSLに接続する。

接続後、 `Welcome` 画面の `Start` 欄最下部 `Clone Git Repository` でこのリポジトリをクローン。

右下枠の `TERMINAL` タブで以下を実行(表示されない場合は画面上部 `Terminal` タブの `New Terminal` で開く):

```bash
docker compose run -u $(id -u) --rm front sh -c "cd ~/ && npx create-react-app app"
```

### コンテナ起動

`docker-compose.yml` を右クリックし、 `Compose Up` を実行

---

## Mac用

[lima-vm/lima: Linux virtual machines, typically on macOS, for running containerd](https://github.com/lima-vm/lima)

を使う。

### homebrewインストール

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Limaインストール

```bash
brew install lima
```

### 仮想環境実行

```bash
# 仮想環境設定ファイル(Ubuntu)ダウンロード
wget https://raw.githubusercontent.com/h-t-t/react_tutorial/master/ubuntu.yaml

# limactlで起動(自動的に仮想環境がダウンロードされる)
limactl start ubuntu.yaml

# 仮想環境のbashシェルに入る
limactl shell ubuntu
```

## VSCodeインストール

```bash
brew install --cask visual-studio-code
```

入れる拡張はWindowsの項目を参考に

## 参考

- https://qiita.com/shun198/items/18014c46901f256af9ee
- https://zenn.dev/acha_n/articles/deploy-react-app-with-github-actions
