---
layout: post
title: "Fixing BlueTooth interruption Woes in Windows"
desc: "Setting ChannelAvoidanceRange in the Windows registry to fix interference"
---

## Is your BlueTooth mouse losing connection signal with your Surface Pro?

Whenever I was at home I experienced occasional dropouts with my BlueTooth mouse, a Microsoft Sculpt mouse. This did not happen at the office where I use the exact same mouse, so I figured this was due to interference at home. Living in the city there are a lot of wireless signals surrounding me, both BlueTooth and WiFi.
So I went looking for a way to make my Surface Pro 3 and the mouse talk to each other without being interrupted by the signal interference.

## Disclaimer

I'm not a Microsoft support partner / engineer. The solution offered here seems to be working for me, but it might not fix your issue. Be careful editing the Windows registry. You can easily screw-up your Windows machine editing the wrong things.

## The Solution: setting a key in the Windows registry

So below you can find the description on how to set the ''ChannelAvoidanceRange'' registry key which for some reason is not set on Surface Pro machines even-though the document states that OEM'S should take care of this. I guess this was a small oversight on Microsoft's side.

So in short, this is what I did:

- Opened up the Windows Registry (with administrator rights)
- As always when editing the Registry: make sure you have a backup!
- Navigated to "HKLM\System\CurrentControlSet\Services\BthServ\Parameters"
- Created the new key "ChannelAvoidanceRange" - I created it as a 32bit REG_DWORD key.
- Set the value of the key to the decimal value 40.
- reboot the machine

After the reboot I am no longer experiencing the annoying BlueTooth connection hickups.
I will keep an eye out of course in case the connection issue returns.


Original Document: <https://msdn.microsoft.com/en-us/library/windows/hardware/dn133849(v=vs.85).aspx>

## How do I enable AFH in Windows?

Windows 8, Windows 7, and Windows Vista include a shared-spectrum model to support AFH for Bluetooth radios that are based on version 2.0 and later versions of the Bluetooth specification. However, this feature is disabled by default. For a system to support the shared spectrum model, the OEM must explicitly enable the feature and specify the width of the frequency band that should be blocked around an active Wi Fi channel. To specify the width of the frequency band, create a value of type REG_DWORD that is named ChannelAvoidanceRange under the following registry key:

    HKLM\System\CurrentControlSet\Services\BthServ\Parameters

The ChannelAvoidanceRange value enables or disables spectrum sharing and specifies the width of the blocked frequency band. To enable spectrum sharing, set ChannelAvoidanceRange to the full width of the frequency band that should be blocked around an active Wi-Fi channel. The units are in MHz and can range from 20 to 40 (0.02 to 0.04 GHz). OEMs must determine an appropriate bandwidth based on a selected set of radios, antenna characteristics, and radio manufacturer feedback.

A new ChannelAvoidanceRange value takes effect only after the system has been rebooted. Ideally, the OEM should set the ChannelAvoidanceRange value during the preinstallation process.

For the Windows shared-spectrum model to work effectively, Wi-Fi miniport drivers must report their channel usage to the networking connections manager. The networking stack then passes the channel-use information to the Bluetooth stack.