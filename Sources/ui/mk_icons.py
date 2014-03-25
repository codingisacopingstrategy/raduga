# -*- coding: utf-8 -*-

import subprocess
import os

"""
Resize a PDF icon to all icon sizes possibly required for iOS.

Uses OS X’s scriptable image processing system command line utility.
http://straylink.wordpress.com/2009/01/24/os-x-command-line-image-manipulation/

On Linux, Ghostscript is your best bet!
"""

icons = [
    (60, "appicon-60@2x.png"),   # not sure this one is actually used   
    (120, "appicon-60@2x.png"),
    (76,  "appicon-76.png"),
    (152, "appicon-76@2x.png"),
    (57,  "appicon.png"),
    (114, "appicon@2x.png"),
    (72,  "appicon-72.png"),
    (144,  "appicon-72@2x.png"),

]

for size, filename in icons:
    outputfile = os.path.join('..', '..', 'Resources', 'iphone', filename)
    pipe = subprocess.Popen(['sips', '-s',
                             'format', 'png',
                             '--resampleWidth', str(size),
                             'icon.pdf',
                             '--out', outputfile])
    pipe.wait()
