---
title: "Trying Hackintosh on my HP ProBook 640 G5"
description: "A step-by-step guide to installing macOS on an HP ProBook 640 G5 with Intel Core i5-8365U and UHD 620 graphics, including BIOS configuration, EFI setup, and troubleshooting tips."
pubDate: 2025-05-07
tags: ["Hackintosh", "macOS", "HP ProBook", "Tutorial", "Tech"]
heroImage: "/assets/img/blog/4.jpg"
---

# Trying Hackintosh on my HP ProBook 640 G5

As a tech enthusiast, I've always been curious about running macOS on non-Apple hardware. Recently, I decided to try installing a Hackintosh on my HP ProBook 640 G5 laptop. Here's my experience and a guide for anyone looking to attempt the same.

## My Hardware Specs

- **Laptop**: HP ProBook 640 G5
- **CPU**: Intel Core i5-8365U
- **Graphics**: Intel UHD 620
- **RAM**: 16GB DDR4
- **Storage**: 512GB NVMe SSD

## 1. BIOS Configuration

Before you begin, make sure to adjust these settings in your BIOS:

- Fast Boot: **Disabled**
- Legacy Support: **Disabled**
- Secure Boot: **Disabled**
- Intel VT-d: **Disabled**
- Fingerprint Device: **Disabled**
- Wake on LAN: **Disabled**
- Run-Time Power Management: **Disabled**
- Wake on USB: **Disabled**

Additional firmware settings to disable (HP-specific):

- Dynamic runtime scanning of boot block
- Sure Start secure boot keys protection
- Enhanced firmware runtime intrusion prevention and detection
- Sure Start security event boot notification (set timeout to 15 seconds)

## 2. EFI Configuration

I used the OpCore-Simplify repository as the base for my OpenCore EFI. Follow the README there for detailed folder structure and plist configuration.

The basic structure of an OpenCore EFI folder looks like this:

```
EFI/
├── BOOT/
│   └── BOOTx64.efi
└── OC/
    ├── ACPI/
    ├── Drivers/
    ├── Kexts/
    ├── Resources/
    ├── Tools/
    └── config.plist
```

### Essential Kexts for HP ProBook 640 G5

- **Lilu.kext**: General patch engine for macOS
- **VirtualSMC.kext**: SMC emulator
- **WhateverGreen.kext**: Graphics patching
- **AppleALC.kext**: Audio support
- **IntelMausi.kext**: Ethernet support
- **USBInjectAll.kext**: USB port mapping
- **VoodooPS2Controller.kext**: Keyboard and trackpad support

## 3. Installation Images

For my installation, I tried two different macOS versions:

- **macOS Mojave**: Olarila Mojave.raw
- **macOS Ventura 13.7.5**: Olarila Ventura 13.7.5.raw

You can download these "vanilla" installer images from Olarila's forum:
[https://olarila.com/topic/6278-olarila-vanilla-images-macos-installer/](https://olarila.com/topic/6278-olarila-vanilla-images-macos-installer/)

## 4. Required Tools

To prepare your installation media and manage partitions, you'll need:

- **DiskGenius** – for partition management
- **balenaEtcher** – to flash RAW images to USB
- **OCAT-Win64** – auxiliary OpenCore configuration tools (available at GitHub Releases)

## 5. Installation Process

1. Use balenaEtcher to flash the macOS installer image to a USB drive (at least 16GB)
2. Mount the EFI partition using DiskGenius
3. Copy your prepared OpenCore EFI folder to the EFI partition
4. Boot from the USB drive (you may need to press F9 during startup to select boot device)
5. Use Disk Utility to format your target drive as APFS
6. Install macOS following the on-screen instructions
7. After installation, mount the EFI partition of your internal drive and copy the EFI folder there

## 6. Known Issues

During my testing, I encountered a few issues:

- **Mojave build**: Wi-Fi adapter is not recognized.
- **Ventura 13.7.5 build**: Installer reports "This copy of the install macOS Ventura application is damaged and can't be used to install macOS."

## 7. Next Steps

If you encounter similar issues, here are some troubleshooting steps:

- Investigate kexts/drivers for Intel UHD 620 Wi-Fi compatibility.
- Verify the integrity of the Ventura installer—consider re-downloading or creating a new raw image.
- Fine-tune ACPI patches and SMBIOS settings in OpenCore for better stability.

## Conclusion

Creating a Hackintosh on the HP ProBook 640 G5 is definitely possible, though it requires some patience and troubleshooting. The Intel UHD 620 graphics are well-supported in macOS, making this laptop a decent candidate for a Hackintosh build.

If you're attempting this project, I recommend starting with macOS Mojave or Catalina for better compatibility, then upgrading to newer versions once you have a stable system.

Have you tried installing a Hackintosh on your laptop? Share your experience in the comments below!
