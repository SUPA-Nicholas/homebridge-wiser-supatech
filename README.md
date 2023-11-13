homebridge-wiser-supatech
================

homebridge-wiser-supatecch is a plug-in for [Homebridge](https://github.com/homebridge/homebridge)
that adds support for the original Clipsal C-Bus Wiser and the Clipsal Wiser 2.

Accessories are automatically discovered from the Wiser project.  To add
additional accessories, add them to your Wiser project and restart homebridge.

Installation
------------

You can install the plug-in using `npm`:

Wiser 2 firmware starting from 1.33.1
`sudo npm install -g homebridge-wiser-supatech`

Wiser 2 Firmware before 1.33.1
`sudo npm install -g homebridge-wiser-supatech@2.1.4`

Configuration
-------------

*homebridge-wiser-supatech* is added as a `platform` in your config.json:

```JSON
"platforms": [
  {
  "platform": "homebridge-wiser-supatech",
  "name": "Wiser",
  "wiserAddress": "1.2.3.4",
  "wiserUsername": "admin",
  "wiserPassword": "yourpassword",
  "wiserPort": "8888",
  "ignoredGAs": [
                {
                    "network": 254,
                    "app": 56,
                    "ga": 4
                },
                {
                    "network": 254,
                    "app": 56,
                    "ga": 5
                }
            ],
}
]
```

The `ignoredGAs` section is optional.  If a group address is listed in this section, an accessory will not be created
even if it is found in your Wiser project.

After adding the platform, simply restart homebridge and your C-Bus groups will
be added as new accessories automatically.

**Note**: `wiserPort` is "80" for plug-in versions starting from 2.2.0, and is "8888" for version 2.1.4.  Unless you have changed your Wiser from the default settings.

Credits
-------

Thanks to [Michael Farrell](http://micolous.id.au) for some useful [Documentation](https://github.com/micolous/cbus/blob/master/docs/wiser-swf-protocol.rst)
on the Wiser.

Thanks to the origin author of the plug-in [paulw11](https://github.com/paulw11)