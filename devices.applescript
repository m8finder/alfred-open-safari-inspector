tell application "System Events"
  set safariRunning to (name of processes) contains "Safari"
  tell application "Safari" to run

  repeat until safariRunning is true
    set safariRunning to (name of processes) contains "Safari"
    delay 0.2
  end repeat

  delay 1

  tell process "Safari"
    name of every menu item of menu 1 of Â
        (first menu item whose name starts with "Simulator") of Â
        menu 1 of menu bar item "Entwickler" of menu bar 1
  end tell
end tell
