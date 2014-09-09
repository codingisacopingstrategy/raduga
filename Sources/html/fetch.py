# -*- coding: utf-8 -*-

import urllib
from datetime import datetime, timedelta
import os
import math

class AppURLopener(urllib.FancyURLopener):
    version = 'Mozilla/5.0'
 
urllib._urlopener = AppURLopener()

# Appropriate bounds of Russia
# Derived from raduga-server’s russia.json
# A bit of space added to the south because there will be the toolbar
# (FIXME actually on android the toolbar is to the north)

BOUNDS = [[34.196091, 19.62726], [81.851929, 191.010254]]

def deg2tile(lat_deg, lon_deg, zoom=4):
    lat_rad = math.radians(lat_deg)
    n = 2.0 ** zoom
    xtile = (lon_deg + 180.0) / 360.0 * n
    ytile = (1.0 - math.log(math.tan(lat_rad) + (1 / math.cos(lat_rad))) / math.pi) / 2.0 * n
    return (xtile, ytile)

def tiles(zoom=4):
    n = 2.0 ** zoom
    latmin, lonmax = deg2tile(BOUNDS[0][0], BOUNDS[0][1], zoom)
    latmax, lonmin = deg2tile(BOUNDS[1][0], BOUNDS[1][1], zoom)

    if latmax > n:
        xtiles = range(int(latmin), int(n))
        xtiles += range(0, int(latmax % n) + 1)
    else:
        xtiles = range(int(latmin), int(latmax) + 1)

    ytiles = range(int(lonmin), int(lonmax) + 1)
    return xtiles, ytiles


def fetch_owm(ZOOM_LEVEL):
    TILE_SERVER        = "http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png"
    TILE_FOLDER        = os.path.abspath(os.path.dirname(__file__))
    
    """
    Download the tiles from Stamen’s toner map.
    At zoom level 4, there are 2⁴ × 2⁴ = 16 × 16 = 256 tiles.
    """
    z = ZOOM_LEVEL
    
    xtiles, ytiles = tiles(ZOOM_LEVEL)
    
    for x in xtiles:
        for y in ytiles:
            uri = TILE_SERVER.format(s='a', z=z, x=x, y=y)
            # make a folder like raduga_tiles/4/5/
            path = os.path.join(str(z), str(x))
            if not os.path.exists(path):
                os.makedirs(path)
            output_file = os.path.join(path, '%s.png' % y)
            if os.path.exists(output_file):
                print "exists", output_file
            else:
                print "retrieving", output_file
                urllib.urlretrieve(uri, output_file)

for zoom in [4, 5, 6, 7, 8]:
    fetch_owm(zoom)
