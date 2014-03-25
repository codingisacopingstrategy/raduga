# -*- coding: utf-8 -*-

import subprocess
import os

"""
Create all splash screens possibly required for iOS, starting from the app icon.

We position it in the middle, taking up 90% of the shortest side.
(should be a bit less, probably).

Even if SIPS rasterisation looks slightly better than Imagemagick’s,
we are using Imagemagick for now because we got it to work.
"""

splash_screens = [
    ((320, 480),   "Default.png"),
    ((640, 960),   "Default@2x.png"),
    ((640, 1136),  "Default-568h@2x.png"),
    ((1024, 748),  "Default-Landscape.png"),
    ((768, 1004),  "Default-Portrait.png"),
    ((2048, 1496), "Default-Landscape@2x.png"),
    ((1538, 2008), "Default-Portrait@2x.png"),
]

for size, filename in splash_screens:
    outputfile = os.path.join('..', '..', 'Resources', 'iphone', filename)
    width, height = size

    
    resample_size = int(.9 * min(size))
    target_res = int(resample_size / 120.0 * 72)
    
    print target_res
    #print width, height, resample_op, resample_size
    pipe = subprocess.Popen(['convert',
                             '-density', str(target_res),
                             'icon_rounded.pdf',
                             '-gravity', 'Center',
                             '-extent', '%sx%s' % size,
                             '-background', 'white',
                             outputfile])
    pipe.wait()
