# -*- coding: utf-8 -*-

import subprocess
import os

"""
Resize a PDF icon to to all icon sizes possibly required for Android,


Uses OS X’s scriptable image processing system command line utility.
http://straylink.wordpress.com/2009/01/24/os-x-command-line-image-manipulation/

On Linux, Ghostscript is your best bet!
"""

icons = [
    (36,  "platform/android/res/drawable-ldpi/appicon.png"),
    (48,  "platform/android/res/drawable-mdpi/appicon.png"),
    (72,  "platform/android/res/drawable-hdpi/appicon.png"),
    (96,  "platform/android/res/drawable-xhdpi/appicon.png"),
    (144, "platform/android/res/drawable-xxhdpi/appicon.png")
]

for size, path in icons:
    outputfile = os.path.join('..', path)
    pipe = subprocess.Popen(['sips', '-s',
                             'format', 'png',
                             '--resampleWidth', str(size),
                             'icon_rounded.pdf',
                             '--out', outputfile])
    pipe.wait()
