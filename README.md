# Understanding Text Sizes

There are different ways to affect the text size in a phone.

## Text Size

In iOS, `Settings` > `Display & Brightness` > `Text Size` > Drag the slider for text size (A).
In Android, `Settings` > `Display` > `Screen Zoom` > `Font Size and Style` > Drag the slider for font size (B).
In iOS, `Settings` > `Display & Brightness` > `Display Zoom` there is an option for Larger Text (C).

## Capacitor Text Zoom Plugin

The `get` method of the [Capacitor Text Zoom Plugin](https://capacitorjs.com/docs/apis/text-zoom#get) returns the current text size. For Android this relates to (B). For iOS this relates to `document.body.style.webkitTextSizeAdjust` which is an iOS specific property that affects the text size of all text.

The `getPreferred` method of the plugin returns the current text size. For Android this relates to (B) and for iOS this relates to (A).

The `set` method will affect the size of all text in your app (`document.body.style.webkitTextSizeAdjust`) and for Android it will also do the same. It does not change the setting of your device.
