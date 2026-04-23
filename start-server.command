#!/bin/zsh
cd /Users/user1/Desktop/NLUIGUI_2/prototype
echo "Serving NLUIGUI_2 prototype with logging at http://$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo 'PCのIPアドレス'):8000/"
echo "Log viewer: http://$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo 'PCのIPアドレス'):8000/log_view.html"
python3 log_server.py
