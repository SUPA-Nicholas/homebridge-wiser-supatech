# Change log

## 2.5.0

Support ignoring a range of group address

## 2.4.0

Support devices in different application address rather than lighting application only
Change construction of serial number (1056001 - application 56 and group 1)

## 2.3.2

Get current device status from Wiser in the startup process

## 2.3.1

- Issue fix:
There is a dummy switch coming with the motion sensor in v2.3.0

## 2.3.0

- New features: 
CBUS motion sensor is now on Apple Home
- Issue fix:
Devices status is not updating on Apple Home when controlling from Wiser and buttons

## 2.2.1

- Fix typo and missing dependencies issue

## 2.2.0

- Change net.socket to websocket for wiser 2 firmware starting from 1.33.1

## 2.1.4

- Fix shuttle relay issue (shuttle relay was recognised as switch not blind)

## 2.1.0

- Use stream based XML Parsing to avoid problems when data from the Wiser is spread across mutiple stream reads.

## 2.0.2

- Handle network disconnection without throwing exceptions

## 2.0.1

- New `platform` name in 2.x.x - Refer to README.md
- Improved warning on events for unknown group addresses
- Fixed error in platform name in config schema

## 2.0.0

- Improved error handling
- Improved debug logging
- Support for shutter relays (#7)
- Support for fan controllers
- New `platform` name - Refer to README.md
