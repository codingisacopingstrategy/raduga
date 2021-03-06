# -*- coding: utf-8 -*-

import subprocess
import os
import sys
from glob import glob

"""
Resize an SVG to all icon sizes possibly required,
uses inkscape 
"""

inkscape = "inkscape"
if sys.platform == "darwin":
    inkscape = "/Applications/Inkscape.app/Contents/Resources/bin/inkscape"

sources = glob("*.svg")

for source in sources:
    base = os.path.splitext(source)[0]
    print base
    small_outputfile = os.path.join('..','..','..','Resources','ui','icons', '%s.png' % base)
    large_outputfile = os.path.join('..','..','..','Resources','ui','icons', '%s@2x.png' % base)

    pipe = subprocess.Popen([inkscape,
                             '--export-png=%s' % small_outputfile,
                             '--export-dpi=90',
                             '--export-background-opacity=0.0',
                             source])
    pipe.wait()
    pipe = subprocess.Popen([inkscape,
                             '--export-png=%s' % large_outputfile,
                             '--export-dpi=180',
                             '--export-background-opacity=0.0',
                             source])
    pipe.wait()
