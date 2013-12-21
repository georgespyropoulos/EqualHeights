EqualHeights
============

EqualHeights is a simple jquery plugin that allows you to resize div containers to be the same height

## How to use it

Add the attribute `data-equal-hights="true"` to all elements that are to be the same height.  All elements with the same parent will be resized to the same height.

```html
<div class="parent-container">
	<div data-equal-heights="true">
	  ...
	</div>
	
	<div data-equal-heights="true">
	  ...
	</div>
</div>
```
Elements are sized with the min-height property to allow them to grow in size if necessary.

To update the size of Equal Heights divs as the browser window changes size run the following code snippet on document ready after the Equal Heights script has been loaded

```javascript
$(window).on('resize', equalHeights);
```

## Dependencies
EqualHeights needs [jQuery](http://jquery.com/)

## License
EqualHeights is released under the [MIT License](http://mit-license.org/)
