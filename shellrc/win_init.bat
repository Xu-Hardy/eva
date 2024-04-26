### install scoop, https://scoop.sh/
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression

scoop install lazygit
scoop bucket add extras
scoop install lazydocker
scoop install k9s
scoop install httpie
scoop install bat
scoop install htop

