---
title: "🪟 How to Set Windows as the Default Boot Option in GRUB on Dual-Boot Systems"
description: "A step-by-step guide to configuring GRUB to set Windows as the default operating system on dual-boot Linux and Windows systems."
pubDate: 2023-11-15
tags: ["Linux", "Windows", "Dual-Boot", "GRUB", "Tutorial"]
heroImage: "/assets/img/blog/4.jpg"
author: "Kevin"
---

# How to Set Windows as the Default Boot Option in GRUB on Dual-Boot Systems

If you're dual-booting Linux and Windows, you might prefer to have Windows boot by default. This guide walks you through configuring GRUB to set Windows as the default operating system.

## Step 1: Identify the Windows Boot Entry

First, determine the exact name of the Windows boot entry in GRUB:

```bash
sudo grep menuentry /boot/grub/grub.cfg
```

Look for a line similar to:

```
menuentry 'Windows Boot Manager (on /dev/sda1)' --class windows --class os {
```

Note the exact title: `Windows Boot Manager (on /dev/sda1)`. This will be used in the configuration.

## Step 2: Edit GRUB Configuration

Open the GRUB configuration file with a text editor:

```bash
sudo nano /etc/default/grub
```

Modify or add the following lines:

```bash
GRUB_DEFAULT="Windows Boot Manager (on /dev/sda1)"
GRUB_SAVEDEFAULT=true
GRUB_TIMEOUT=7
```

Explanation of the settings:

- **GRUB_DEFAULT**: Sets Windows as the default boot option.
- **GRUB_SAVEDEFAULT**: Remembers the last selected boot entry.
- **GRUB_TIMEOUT_STYLE=hidden**: Hides the GRUB menu by default.
- **GRUB_TIMEOUT=7**: Waits 7 seconds before booting the default OS, allowing time to select another OS if desired.

Save the file and exit the editor (in nano: press Ctrl+O, then Enter to save, and Ctrl+X to exit).

## Step 3: Update GRUB

Apply the changes by updating GRUB:

```bash
sudo update-grub
```

This command regenerates the GRUB configuration file to include your changes.

## Step 4: Reboot and Verify

Restart your computer:

```bash
sudo reboot
```

Upon reboot, your system should automatically boot into Windows. If you wish to access the GRUB menu to select a different operating system, press and hold the Shift key during startup.

## Troubleshooting

### If Windows Doesn't Boot by Default

1. **Check the exact entry name**: Make sure the name in `GRUB_DEFAULT` exactly matches the Windows entry in your GRUB menu.

2. **Try using the entry number**: Instead of using the name, you can use the entry number (starting from 0). For example:
   ```
   GRUB_DEFAULT=2
   ```
   This would select the third entry in the GRUB menu.

3. **Verify your changes**: Check if your changes were saved correctly:
   ```bash
   cat /etc/default/grub | grep GRUB_DEFAULT
   ```

### If GRUB Menu Doesn't Show

If you need to access the GRUB menu but it's hidden:

1. Press and hold the Shift key during startup.
2. If that doesn't work, edit the GRUB configuration again and change:
   ```
   GRUB_TIMEOUT_STYLE=menu
   ```
   This will make the menu visible during boot.

## Conclusion

By following these steps, you've configured your system to boot into Windows by default while retaining the ability to choose other operating systems when needed. This setup provides the convenience of automatically booting into your preferred OS while maintaining the flexibility of a dual-boot system.
