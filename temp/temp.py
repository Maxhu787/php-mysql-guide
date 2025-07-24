import pyautogui
import time

time.sleep(3)

while True:
    for i in range(3):
        pyautogui.press("up")
        time.sleep(1)

    for i in range(3):
        pyautogui.press("down")
        time.sleep(1)

# python -m venv my-venv
# source my-venv/bin/activate
# deactivate