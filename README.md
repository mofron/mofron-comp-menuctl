# mofron-comp-menuctl
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

menu controller component for mofron


# Install
```
npm install mofron mofron-comp-menuctl
```

# Sample
```html
<setting>
    <tag load="mofron-comp-menuctl">MenuCtl</tag>
    <tag load="mofron-comp-txtframe">TxtFrame</tag>
</setting>

<MenuCtl>
    <menu:pull offset=-0.01rem horizon=true></menu:pull>
    <menu-item size=(1.5rem,0.5rem)>
        <TxtFrame>menu 1</TxtFrame>
        <TxtFrame>menu 2</TxtFrame>
        <TxtFrame>menu 3</TxtFrame>
    </menu-item>
    <contents>
        <Text>contents 1</Text>
        <Text>contents 2</Text>
        <Text>contents 3</Text>
    </contents>
</MenuCtl>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | menu | mofron-comp-menu | menu component |
| | | | undefined: call as getter |
| | menuItem | mixed | array: menu item list |
| | | | mofron.class.Component: menu item contents |
| | | key-value | menu item config |
| | contents | mixed | array: contents list |
| | | | mofron.class.Component: contents component |

