# MacBook 安装记录

> 这个文档的目的是每次拿到新的 MacBook 时，方便快速初始化笔记本，安装必备工具并记录必要的配置。

## 1. 📦 软件安装

### 1. Homebrew（包管理器）

```bash
# 安装命令
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 验证是否成功
brew --version
```

**官网地址：** https://brew.sh/zh-cn/

### 2. Visual Studio Code

```bash
brew install --cask visual-studio-code
```

**安装 code 命令：**
1. 打开命令面板：`Cmd + Shift + P`
2. 输入 `shell command`
3. 选择并运行：`Shell Command: Install 'code' command in PATH`

### 3. Typora（Markdown 编辑器）

**下载地址：** https://xclient.info/s/typora.html

### 4. QQ、WeChat、腾讯会议

```bash
brew install --cask wechat qq tencent-meeting
```

> ⚠️ 记得修改存储路径

### 5. Mos（鼠标滚动方向调整）

```bash
brew install --cask mos
```

### 6. 有道词典

```bash
brew install --cask youdaodict
```

### 7. Snipaste（截图工具）

```bash
brew install --cask snipaste
```

### 8. FNM（Node.js 版本管理）

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

### 9. CleanMyMac X（系统清理）

**下载地址：** https://www.macwk.com/soft/cleanmymac-x

### 10. 网易云音乐

```bash
brew install --cask neteasemusic
```

### 11. 超级右键

**下载地址：** https://macked.app/irightmouse-crack.html

> ⚠️ 把cursor增加到右键

### 12. LULU安全网络防火墙

**下载地址：** https://github.com/objective-see/LuLu/releases

特点：开源、安全防控

### 13. Navicat

**Navicat lite**: 免费正版：https://www.navicat.com/en/download/navicat-premium-lite

**Navicat Pro**：自行寻找

### 14. lxmusic

软件本体：https://github.com/lyswhut/lx-music-desktop

音乐源（进dc查找）：https://antfe.com/dc

### 15. maczip

下载：https://ezip.awehunt.com

### 16. office

https://github.com/alsyundawy/Microsoft-Office-For-MacOS?tab=readme-ov-file

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

## 5. 🔧 VS Code 扩展

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


## 8. GoLang

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

### 1. postgresql

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
