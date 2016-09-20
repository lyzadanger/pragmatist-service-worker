# Pragmatist's Guide to Service Workers

In this repository, you'll find code examples to illustrate the _Pragmatist's Guide_ presentation, given at Smashing Conference, Freiburg, September 2016.

## Install

Clone this repository, then:

`npm install`

To run a local web server and see the examples in action, run:

`npm start`

You'll want to use a browser that supports Service Worker; I use Chrome but SW is also supported in Firefox and Opera to differing extents.

_Note_: These examples, run locally, rely on the `localhost` exception to the SSL/TLS requirement for Service Workers.

## Examples

1. [Mission 1](missions/01-offline-message): _Offline message_ — Respond to `navigation` requests (i.e. requests for HTML documents). Try to fetch from the network, but if that fails, return a `Response` object that emulates a simple web page with an `Oh, dear` message.
1. [Mission 2](missions/02-offline-page): _Offline page_ — Same as before, but instead of returning a self-made Response on fetch failure, cache an offline HTML page during the `install` phase and return _that_ upon fetch failure.
1. [Mission 3](missions/03-network-strategies): _Network strategies_ — Respond to fetches for content (HTML) and static assets (images) differently. Use a _network-first_ strategy for content and a _cache-first_ strategy for images.
1. [Mission 4](missions/04-application-shell): _Application shell_ — During the `install` phase, cache a bunch of static assets that we consider to be our application's "shell". Respond to fetches and look in the cache _first_ for requests for those assets. Once the service worker is installed, you can go offline and continue to "request clouds" (images of clouds).
1. [Mission 5](missions/05-versioning): _Cache naming and cleanup_ — Use cache-prefixing to manage versioning of a service worker and, during the `activate` phase, clean up (old) caches that don't match the new cache prefix. To version-bump, you'd want to change the `cachePrefix` value.
1. [Mission 6](missions/06-fancypants): _Fancypants_ — Add a fallback offline image and use a JSON file as a source of URLs to pre-cache during `install`.
