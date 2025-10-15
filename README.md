# 初始化我的 MacBook

[![GitHub](https://img.shields.io/badge/GitHub-Chiaki--xps%2Finit--my--macbook-blue?logo=github)](https://github.com/Chiaki-xps/init-my-macbook)
[![Website](https://img.shields.io/badge/Website-在线文档-green)](https://chiaki-xps.github.io/init-my-macbook/)
[![License](https://img.shields.io/github/license/Chiaki-xps/init-my-macbook)](https://github.com/Chiaki-xps/init-my-macbook/blob/main/LICENSE)

> 这个文档的目的是每次拿到新的 MacBook 时，方便快速初始化笔记本，安装必备工具并记录必要的配置。也是想收集大家平时好用的软件，及时体验上新的好工具

## 🔗 相关链接

- **GitHub 仓库**: [https://github.com/Chiaki-xps/init-my-macbook](https://github.com/Chiaki-xps/init-my-macbook)
- **在线文档**: [https://chiaki-xps.github.io/init-my-macbook/](https://chiaki-xps.github.io/init-my-macbook/)
- **提供您认为好用的软件**: [GitHub Issues](https://github.com/Chiaki-xps/init-my-macbook/issues)

## 如何贡献这个文档

建议通过 Issue 或 Pull Request 提交修改。合并前我会逐一验证每个软件的安装与使用。对于功能重叠或类型相近的软件，我会在文档中合并对比，并给出推荐项。建议在 PR 中附上变更说明、测试环境与必要截图。

## 1. 📦 软件安装

### 1. Homebrew（包管理器）

```bash
# 安装命令
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 验证是否成功
brew --version
```

**官网地址：** [https://brew.sh/zh-cn/](https://brew.sh/zh-cn/)

### 2. Visual Studio Code

```bash
brew install --cask visual-studio-code
```

**安装 code 命令：**
1. 打开命令面板：`Cmd + Shift + P`
2. 输入 `shell command`
3. 选择并运行：`Shell Command: Install 'code' command in PATH`

### 3. Cursor

```bash
brew install --cask cursor
```

**导入 VS Code 配置**：首选项 → Cursor Setting → Import Settings from VS Code

  + 这里提供一下导入vscode插件失败的方案（谨慎使用，因为Cursor最新版本和VS Code部分插件存在兼容问题）

  1. ```bash
     # 找到 cursor 程序下 product.json
     code /Applications/Cursor.app/Contents/Resources/app/product.json
     ```

  2. 找到 `extensionsGallery`，将其中 `https://marketplace.cursorapi.com` 改成 `https://marketplace.visualstudio.com`

  3. 重启，重新导入就可以了，**记得还原文件**

### 4. Markdown 编辑器

+ Typora：**下载地址：** [https://xclient.info/s/typora.html](https://xclient.info/s/typora.html)
  + 页面简洁，个人感觉展示效果更好，但是收费。低版本免费。
+ Obsidian：**下载方式：**`brew install --cask obsidian`
  + 功能强大，基础功能免费

### 5. QQ、WeChat、腾讯会议

```bash
brew install --cask wechat qq tencent-meeting
```

> ⚠️ 记得修改存储路径

### 6. Mos（鼠标滚动方向调整）

```bash
brew install --cask mos
```

### 7. 有道词典

```bash
brew install --cask youdaodict
```

### 8. Snipaste（截图工具）

```bash
brew install --cask snipaste
```

### 9. FNM（Node.js 版本管理）

```bash
brew install fnm
```

**配置 FNM：**
1. 编辑配置文件：`code ~/.zshrc`
2. 添加以下配置：
   ```bash
   # fnm 配置
   eval "$(fnm env --use-on-cd)"
   ```
3. 重新加载配置：`source ~/.zshrc`
4. 设置默认版本：`fnm default <版本号>`

### 10. 系统清理

+ CleanMyMac X：**下载地址：** [https://www.macwk.com/soft/cleanmymac-x](https://www.macwk.com/soft/cleanmymac-x)

+ 腾讯柠檬清理（tencent-lemon）：`brew install --cask tencent-lemon`

### 11. 网易云音乐

```bash
brew install --cask neteasemusic
```

### 12. 超级右键

**下载地址：** https://macked.app/irightmouse-crack.html

> ⚠️ 将 Cursor 添加到右键菜单

### 13. LuLu 安全网络防火墙

**下载地址：** https://github.com/objective-see/LuLu/releases

特点：开源、安全防控

### 14. Navicat

**Navicat lite**: 免费正版：https://www.navicat.com/en/download/navicat-premium-lite

**Navicat Pro**：自行寻找

### 15. lxmusic

软件本体：[https://github.com/lyswhut/lx-music-desktop](https://github.com/lyswhut/lx-music-desktop)

音乐源（进 dc 查找）：[https://antfe.com/dc](https://antfe.com/dc)

### 16. maczip

下载：[https://ezip.awehunt.com](https://ezip.awehunt.com)

### 17. Microsoft Office

[https://github.com/alsyundawy/Microsoft-Office-For-MacOS?tab=readme-ov-file](https://github.com/alsyundawy/Microsoft-Office-For-MacOS?tab=readme-ov-file)

## 3. 🚀 Node.js 环境配置

### 安装包管理工具

```bash
# 安装 nrm（npm 源管理）
npm install nrm -g

# 安装 pnpm（快速包管理器）
npm install pnpm -g

# ARM Mac 需要安装 Rosetta 以支持低版本 Node
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```

## 4. 🖥️ 终端配置

### 1. iTerm2

```bash
brew install --cask iterm2
```

**设置为默认终端：**
- 打开 iTerm2
- 菜单栏：iTerm2 → Make iTerm2 Default Term

### 2. Oh My Zsh

```bash
# 安装 Oh My Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 3. Dracula 主题

```bash
# 克隆主题仓库
git clone https://github.com/dracula/iterm.git
```

**安装步骤：** https://draculatheme.com/iterm

### 4. zsh-autosuggestions（命令自动补全建议插件）

```zsh
brew install zsh-autosuggestions
```

在 `~/.zshrc` 的 `plugins` 数组中添加 `zsh-autosuggestions`，然后执行 `source ~/.zshrc`。

如果出现 “zsh-autosuggestions 找不到” 的报错，可按架构选择正确路径并追加到 `~/.zshrc`：

- Apple 芯片（Homebrew 默认前缀 `/opt/homebrew`）
  ```bash
  echo 'source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh' >> ~/.zshrc
  source ~/.zshrc
  ```
- Intel 芯片（Homebrew 默认前缀 `/usr/local`）
  ```bash
  echo 'source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh' >> ~/.zshrc
  source ~/.zshrc
  ```

验证是否生效：打开新终端，输入部分命令应出现灰色联想；或执行
```bash
grep -n "zsh-autosuggestions.zsh" ~/.zshrc
```

### 5. zsh-syntax-highlighting（语法高亮插件）

```zsh
brew install zsh-syntax-highlighting
```

## 5. 🔧 VSCode 扩展与配置

```

> 待补充

## 6. 🔑 Git 配置

### 1. 生成 SSH 密钥

```bash
# 生成新的 SSH 密钥对
ssh-keygen -t ed25519 -C "your-email@example.com"

# 查看公钥内容
cat ~/.ssh/id_ed25519.pub

# 配置 Git 身份信息（全局）
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

# 仅为当前仓库配置
git config user.email "you@example.com"
git config user.name "Your Name"
```

### 2. 配置 GitHub

1. 复制公钥内容
2. 登录 GitHub → Settings → SSH and GPG keys
3. 点击 "New SSH key"
4. 粘贴公钥并保存

## 7. 🎨 MacBook 系统设置

### 1. Clash Verge 系统代理工具
[https://github.com/clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev)


## 8. GoLang 环境

### 1. 版本号查询

https://github.com/golang/go/tags

### 2. 安装

```bash
brew install goenv

# .zshrc
export GOENV_ROOT="$HOME/.goenv"
export PATH="$GOENV_ROOT/bin:$PATH"
eval "$(goenv init -)"
export PATH="$GOENV_ROOT/shims:$PATH"

goenv install 1.25.0
goenv global 1.25.0

# 为单独项目设置
goenv local 1.25.0

# 切换源吧
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct
```

## 9. 数据库

### 1. PostgreSQL

```bash
brew search postgresql
brew install postgresql@17
brew services start postgresql@17

# 废弃了
# echo 'export PATH="/usr/local/opt/postgresql@16/bin:$PATH"' >> ~/.zshrc

# 新的目录
echo 'export PATH="/opt/homebrew/opt/postgresql@17/bin:$PATH"' >> ~/.zshrc

source ~/.zshrc

psql postgres

# 创建用户
CREATE USER vadxq WITH PASSWORD '123456';
ALTER USER vadxq WITH SUPERUSER;
```

### 2. redis

```bash
brew install redis
brew services start redis
brew services info redis
```
