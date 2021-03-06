What's New in OpenNMS Compass
=============================

3.1.0
-----

A performance release, with updates to core Angular, Ionic, and Cordova frameworks.

Also includes:

* updated backshift graphing engine with graph bug fixes
* alarm donut now notes that it is for WARN or higher
* add support for auto-filling passwords in the server settings

3.0.2
-----

A small release just to get us built against the iOS 10.3 SDK and fix a few tiny bugs.

* fix an issue that could cause a ReST error on an empty node search
* change the "demo" URL to https to avoid weird redirects
* when checking the OpenNMS server setting, retry once before trying other URLs
* when checking the OpenNMS server setting, fix a bug when trying '/opennms/' on HTTPS

3.0.1
-----

Bug fixes and performance improvements.  (Sorry, couldn't help ourselves.)

But seriously, this release contains just a few small changes:

* fix missing "Clear" button on the node search
* fix hidden search results when a user has scrolled and then the search shortens the list
* don't flash cached data on reload when there was an error
* show a spinner on the dashboard while network operations are still in-progress, even if cached data is shown

3.0.0
-----

Compass has had a huge internal update, a face lift, and probably a Brazilian Blowout or something.  The codebase is leaner, faster, and has a number of new features, including:

* Graphs!  Compass 3.0 now supports resource graphs using the measurements API, available in Horizon 16 and above, and Meridian 2016.1.0 or higher.
* Multiple server support!  Now you can configure and switch between multiple OpenNMS servers.
* Maps!  (No, not those maps... cough)  The node detail page will now show your node on a map if it has geolocation information.
* Improved platform support.  Some basic portions of Compass now work all the way back to OpenNMS 1.8, although we strongly recommend you upgrade, of course.  :)
* Support for remote-controlling an army of death bots.  (Just checking if anyone reads these things...)

Also, Compass 3.0 does NOT have:

* Ads!  Thanks to everyone who supported Compass 2.0 but we decided to remove the ads to improve the experience for everyone.

