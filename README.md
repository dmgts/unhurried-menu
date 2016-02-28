# UnhurriedMenu.JS

The menu has been created in the image and likeness of the current [Mahsable](http://mashable.com/) header menu. It solves in the quite nifty way the problem of the narrow corridors which a user has to overcome in order to get to the cherished menu item in the complex dropdown. 

Yes, this is the case when a timeout is used for not making a hack but reasonably and without breaking the UX. You can check it for yourself by trying [the DEMO](http://dmgts.github.io/unhurried-menu/).

## Getting started

#### 1. Add js/css to the page:
If you don't use jquery UI just add the <a href="https://github.com/jquery/jquery-ui/blob/master/ui/widget.js">widget factory</a> - (AMD/CommonJS modules will be added later):


```html
<script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
<script src="js/vendor/jquery.ui.widget.js"></script>
<script src="js/jquery.unhurried-menu.js"></script>
```

#### 2. Add html:
Create a regular menu using an unordered list or any other tree structure like the following for instance (of course with your related css):
```html
<!-- You even don't have to use any css-classes actually -->
<ul class="root-menu">
    <li class="root-item">
        <a href="#">Item 1</a>
        <div class="root-item-content">Your content</div>
    </li>
    ... and so on
</ul>
```
#### 3. Call the plugin:
```js
+function( $ ) {
    $( '.root-menu' ).unhurriedmenu({
        baseTimeout: 350
    });
}( jQuery );
```
#### 3. Enjoy.

### TODO:

1. Comments for code.
2. Tests.
3. AMD/CommonJS modules.
4. Example with a complex dropdown menu (vertical/horizontal).
5. Minified version.
