#!/bin/zsh
cd /Users/user1/Desktop/NLUIGUI_2/prototype
echo "Serving NLUIGUI_2 prototype at http://$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo 'PCのIPアドレス'):8000/"
python3 -m http.server 8000
