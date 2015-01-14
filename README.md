Raduga
======

Read online: <http://github.com/codingisacopingstrategy/raduga>

Raduga, the app that predicts rainbows over Russia
---------------------------------------------------

Pink Pony Express & Club Interbellum present a meteorological protest.

In June 2013, Russian president Vladimir Putin signed a law banning propaganda
for non-traditional sexual relations. As a result, the rainbow is disappearing
from the streets of Russia. We are introducing the app Raduga, enabling the
masses to spot and capture rainbows everywhere.

Raduga is an interactive mobile app that uses live satellite data to predict
the formation of rainbows, and sends you an alert when rainbows are in the
neighborhood. Users can upload and share their own rainbow photos via social
media, to show that rainbows are here to stay.

Source code
-----------

The app is made with [Appcelerator Titanium][tit], which one needs to install on one’s
computer if one wants to run this source code. Titanium allows to write apps in JavaScript using native components on various platforms. The version of the Titanium SDK used is 3.4.1.GA, which works with Xcode 6. This version compiles with the iOS8 framework, but it needs some tweaks still: for example the set-up for the push notifications has to be adapted to iOS8.

To make the code work flawlessly on Android, some work is still required.

The App makes use of serverside components. It uses both Appcelerator Cloud services and the  serverside components available here:

<https://github.com/codingisacopingstrategy/raduga-server>

If you want to develop on the app, it is easiest to continue using the Appcelerator Cloud Services and server-side components already configured—ask one of the developers for access. The way that the app registers itself at the ACS is through keys in the `tiapp.xml` file.

[tit]: http://www.appcelerator.com/
