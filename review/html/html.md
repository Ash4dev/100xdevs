v1:

index files: default service by web servers, fall-back case
emmet: productivity tool for html; can be accessed only in presence of a created file structure
in development: memory(updation required with changes) acts as the server

v2:
html: mark-up language(define the structure of document); other: markdown, latex
search-engines: rank websites on the basis of relevance. relevant content when included in higher importance tags, lead to SEO. Eg. h1,h2 not related to size but to importance.

refer: developers.google.com/search/docs/crawling-indexing (follow SEO)

all html operations are performed using tags
1. doctype lists the type of markup language to be used(html)
2. create html (root of the tree) & define its language
3. 2 children of html: head(Webpage Info), body(Webpage Cont)
4. head: charset(supported characters): UTF-16(emojis)
https://www.youtube.com/watch?app=desktop&v=DntKZ9xJ1sM

v3:
always end tags(good practice)
html is spacing insenstive (solution: br,hr OR pre)

v4:
No ! at end:  <!-- Comment --> (no sensitive information here)
<strong> implies additional importance, else <b>(no extra info)
<em> implies additional importance, else <i>
<small>, <sup>, <sub>, (<del>,<ins>) <mark>: spacing matters even if not in <pre>
global attribute: available for all HTML elements

v5:

use hsla,rgba > hex > blue values for colors(subject to interpretation)
hsla: hue(360 deg wheel color), saturation(intensity: 0 to 100), lightness(light from color 0 to 100), alpha(opacity)
style can be introduced: inline(useful in conditional styling), inside head (reference to outside if wish like style.css or inside also works)
use quote derivatives for additional emphasis, not just a paragraph within "" (SEO)
address, cite emphasis (structure)

v6:

tel: increases mobile usability
_self, _parent, _blank, _top: https://stackoverflow.com/a/63759718
use id to refer to specific objects
use unsplash, pexels for getting non-copyrighted images
always use non-space names for assets
<picture>: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture (choose best image to display)
image map: create a grid for the image & define specifics (image tagging)

v7:
colspan, rowspan: merge n in one

v8:
lists are useful in navigation bar, footers etc
nested list: ol in ul or any comb & depth(indented)
datalist: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
if take full element: block element (blocked region) else inline

v9:
classes(.) and ids(#): for targeting elements
ids: 1to1, classes: 1tomany map
iframes: embed document in html doc(min use as not risk averse: use sandbox)

v10:
metadata:info about page
use stylesheet to ensure not too clumsy
meta viewport (mobile only 0.1 to 1 much diff, later not much) must work with all devices
<div class = "header"></div> equivalent to <header></header>
same for nav, section, article, aside, footer, summary

v11:
GET: request data from a specified resource.