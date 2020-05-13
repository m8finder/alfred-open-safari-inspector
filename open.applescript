on run argv

  set inspect to item 1 of argv

  tell application "System Events"
    tell process "Safari"
      log inspect
      click menu item inspect of menu 1 of Â
          (first menu item whose name starts with "Simulator") of Â
          menu 1 of menu bar item "Entwickler" of menu bar 1
    end tell
  end tell

end run
