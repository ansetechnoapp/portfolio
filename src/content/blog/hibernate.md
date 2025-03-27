---
title: "Enable Hibernate on Ubuntu: A Step-by-Step Guide"
description: "Learn how to enable and configure hibernation on Ubuntu with this comprehensive guide. Follow step-by-step instructions to set up hibernation properly."
pubDate: 2024-03-27
tags: ["Ubuntu", "System Administration", "Power Management"]
heroImage: "/assets/icone/matt-icons_system-hibernate.svg"
---

# Enable Hibernate on Ubuntu: A Step-by-Step Guide  

## 1. Check Secure Boot Status  
Before proceeding, ensure Secure Boot is disabled. Run:  
```bash
mokutil --sb-state
```  
If the output shows `SecureBoot enabled`, disable it in your BIOS settings.

---

## 2. Verify Hibernation Support  
Open a terminal and check if your system supports hibernation:  
```bash
cat /sys/power/state
```  
Expected output:  
```
freeze mem disk
```  
If `disk` is present, your kernel supports hibernation. Test it with:  
```bash
sudo systemctl hibernate
```  
Your system should power off and restore upon boot.

---

## 3. Ensure Adequate Swap Space  
Your swap should be at least the size of your RAM. Check RAM and swap size:  
```bash
free -h
```  
Verify swap partition or file:  
```bash
swapon --show
```  
If no swap exists, create one.

---

## 4. Check Disk Space  
Install and run `gparted`:  
```bash
sudo apt install gparted
sudo gparted
```  
Select `/dev/sda` and examine partitions for available space.

---

## 5. Resize Partition (If Needed)  
If you need space for swap, shrink a partition like `/dev/sda7`:  
```bash
df -h /
```  
Use `gparted` to resize it. **Backup your data before proceeding**.

---

## 6. Create a Swap Partition  
In `gparted`, create a new partition:  
- Set size (e.g., **32 GB**).  
- Choose **linux-swap** as the type.  
- Apply changes.  
- Note the new partition's device name (e.g., `/dev/sda8`).  

---

## 7. Configure Swap  
Format and activate the swap partition:  
```bash
sudo mkswap /dev/sda8
sudo swapon /dev/sda8
```  
Get the **UUID** of the swap partition:  
```bash
sudo blkid /dev/sda8
```  
Edit `/etc/fstab`:  
```bash
sudo nano /etc/fstab
```  
Replace the `/swapfile` entry with:  
```
UUID=your_swap_uuid none swap sw 0 0
```  
Then remove the old swap file:  
```bash
sudo swapoff /swapfile
sudo rm /swapfile
```  

---

## 8. Configure GRUB for Hibernate  
Edit GRUB:  
```bash
sudo nano /etc/default/grub
```  
Modify this line:  
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash resume=UUID=YOUR-SWAP-UUID"
```  
Update GRUB:  
```bash
sudo update-grub
```  
Also, update initramfs:  
```bash
echo "RESUME=UUID=YOUR-SWAP-UUID" | sudo tee /etc/initramfs-tools/conf.d/resume
sudo update-initramfs -u
```  

---

## 9. Enable Hibernate in PolicyKit  
Create necessary directories:  
```bash
sudo mkdir -p /etc/polkit-1/localauthority/10-vendor.d
```  
Edit the PolicyKit configuration:  
```bash
sudo nano /etc/polkit-1/localauthority/10-vendor.d/com.ubuntu.desktop.pkla
```  
Add the following:  
```
[Re-enable hibernate by default in upower]
Identity=unix-user:*
Action=org.freedesktop.upower.hibernate
ResultActive=yes

[Re-enable hibernate by default in logind]
Identity=unix-user:*
Action=org.freedesktop.login1.hibernate;org.freedesktop.login1.handle-hibernate-key;org.freedesktop.login1;org.freedesktop.login1.hibernate-multiple-sessions;org.freedesktop.login1.hibernate-ignore-inhibit
ResultActive=yes
```  

Also, create another rules file:  
```bash
sudo nano /etc/polkit-1/rules.d/10-enable-hibernate.rules
```  
Add:  
```js
polkit.addRule(function(action, subject) {
    if (action.id == "org.freedesktop.login1.hibernate" || 
        action.id == "org.freedesktop.login1.hibernate-multiple-sessions" || 
        action.id == "org.freedesktop.upower.hibernate" || 
        action.id == "org.freedesktop.login1.handle-hibernate-key" || 
        action.id == "org.freedesktop.login1.hibernate-ignore-inhibit") {
        return polkit.Result.YES;
    }
});
```  

---

## 10. Test Hibernate  
Reboot and verify hibernation:  
```bash
sudo systemctl hibernate
```  
If everything works, your system should restore after powering back on.

---

This guide will be great for your blog! Let me know if you need further refinements. 🚀
