
# set -x
#!/bin/bash
cp .shrc ~
# 定义shrc文件的路径
SHRC_PATH="~/.shrc"

# 检查~/.zshrc中是否已经包含了SHRC_PATH的引用
if grep -qF "source $SHRC_PATH" ~/.zshrc; then
    echo "shrc已经被添加到~/.zshrc中了。"·
else
    # 如果没有找到，就添加一行引用到~/.zshrc的末尾
    echo "source $SHRC_PATH" >> ~/.zshrc
    echo "shrc已成功添加到~/.zshrc中。"
fi
source ~/.zshrc