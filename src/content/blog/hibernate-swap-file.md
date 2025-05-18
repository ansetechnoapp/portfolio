---
title: "How to Enable Hibernation with a Swap File on Ubuntu (and Other Modern Linux Distributions)"
description: "A comprehensive guide to setting up hibernation with a swap file on Ubuntu and other modern Linux distributions, offering more flexibility than traditional swap partitions."
pubDate: 2024-07-15
tags: ["Ubuntu", "Linux", "Hibernation", "System Administration", "Swap File"]
heroImage: "/assets/icone/matt-icons_system-hibernate.svg"
author: "Kevin"
---

# How to Enable Hibernation with a Swap File on Ubuntu (and Other Modern Linux Distributions)

Hibernation is a powerful feature that allows you to save the complete state of your session (the contents of RAM) to disk and then completely power off your computer. Upon restarting, everything is restored exactly as it was, with no power consumption during the downtime. However, on many recent Linux distributions, hibernation is not enabled by default, especially if you use a swap file instead of a dedicated swap partition. This guide explains, step by step, how to set up hibernation with a swap file, reliably and securely.

## Why Use a Swap File for Hibernation?

- **More flexible than a swap partition**: you can resize it easily without repartitioning your disk
- **Ideal for systems installed without a dedicated swap partition**
- **Compatible with most modern file systems**
- **Easier to manage**: can be created, resized, or removed without affecting other partitions

## Step-by-Step Guide to Configuring Hibernation with a Swap File

### 1. Check or Create the Swap File

First, check if you already have a swap file and its size:

```bash
sudo swapon --show
```

If you need to turn off an existing swap file (to resize it, for example):

```bash
sudo swapoff /swap.img
```

Create or resize the swap file. It should be at least as large as your installed RAM:

```bash
# Example: Creating a 16GB swap file
sudo fallocate -l 16G /swap.img
sudo chmod 600 /swap.img
sudo mkswap /swap.img
sudo swapon /swap.img
```

Make it permanent by adding it to `/etc/fstab`:

```bash
# Add this line to /etc/fstab
/swap.img none swap sw 0 0
```

### 2. Get the Partition UUID and Swap Offset

Get the UUID of the partition containing the swap file:

```bash
sudo findmnt -no UUID -T /swap.img
```

Find the physical offset of the swap file (crucial for hibernation):

```bash
sudo filefrag -v /swap.img | awk '$1=="0:" { print $4 }'
```

The output will be something like `0:` followed by numbers. Note the number after the colon and before the period (e.g., `32768`).

### 3. Configure GRUB for Hibernation

Edit the GRUB configuration file:

```bash
sudo nano /etc/default/grub
```

Add the resume parameters to `GRUB_CMDLINE_LINUX_DEFAULT` (replace with your values):

```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash resume=UUID=YOUR_UUID resume_offset=YOUR_OFFSET"
```

Update GRUB and the initramfs:

```bash
sudo update-grub
sudo update-initramfs -u
```

### 4. Allow Hibernation for All Users

Create the PolicyKit file to allow hibernation:

```bash
sudo mkdir -p /etc/polkit-1/localauthority/10-vendor.d
sudo nano /etc/polkit-1/localauthority/10-vendor.d/com.ubuntu.hibernate.pkla
```

Add the following content:

```ini
[Re-enable hibernate for UPower]
Identity=unix-user:*
Action=org.freedesktop.upower.hibernate
ResultActive=yes

[Re-enable hibernate for logind]
Identity=unix-user:*
Action=org.freedesktop.login1.hibernate; \
       org.freedesktop.login1.handle-hibernate-key; \
       org.freedesktop.login1.hibernate-multiple-sessions; \
       org.freedesktop.login1.hibernate-ignore-inhibit
ResultActive=yes
```

### 5. Reboot and Test

Reboot your system:

```bash
sudo reboot
```

Test hibernation:

```bash
sudo systemctl hibernate
```

Your computer should power off. When you turn it back on, your session should be restored exactly as you left it.

## Tips and Important Notes

- **Swap file size**: The swap file must be at least as large as your installed RAM to accommodate hibernation.
- **GRUB parameters**: An error in the GRUB parameters can prevent the system from booting. Double-check your UUID and offset values.
- **Fragmentation**: On some systems, swap file fragmentation can cause issues. It's best to create a swap file on a partition with little fragmentation.
- **Proprietary drivers**: If you use proprietary drivers (e.g., Nvidia), check their compatibility with hibernation.
- **Secure Boot**: On some systems, Secure Boot might need to be disabled for hibernation to work properly.
- **File system compatibility**: While most modern file systems support swap files, some (like older versions of Btrfs) might have limitations.

## Troubleshooting

### System Doesn't Resume After Hibernation

- Verify the UUID and offset values in your GRUB configuration
- Check if your swap file is large enough
- Ensure the swap file is not fragmented
- Check system logs for errors: `journalctl -b -1`

### Hibernation Option Not Available

- Verify that the PolicyKit configuration is correct
- Check if your system supports hibernation: `cat /sys/power/state` should include "disk"
- Ensure the swap file is active: `swapon --show`

### System Freezes During Resume

- This might be related to hardware compatibility issues
- Try updating your kernel and firmware
- Check for known issues with your specific hardware

## Conclusion

With this guide, you can enjoy hibernation even on a system without a dedicated swap partition, using a simple swap file. This gives you more flexibility and can extend your laptop's autonomy when on the move. The swap file approach is particularly useful for systems where you don't want to repartition the disk or where you need to adjust the swap size frequently.

Remember that hibernation performance depends on your disk speed - SSDs will provide much faster resume times than traditional hard drives. Happy hibernating!
