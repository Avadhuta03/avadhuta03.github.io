---
layout: post
title: Fundamental Concepts
categories: Linux
comments: true
image: 
---

For Linux System Programming, understanding of concepts like kernel, shell, programs and processes, memory mappings and more is necessary.

 <!--continue-->

### The Core Operating System : The Kernel

The kernel refers to the central software that manages and allocates computer resources like CPU, RAM etc. Although programs can run withou a kernel on computer, but the presence of kernel simplifies the writing and use of other programs by providing a software layer.

The  Linux kernel executable usually resides at the path name _/boot/vmlinuz_


#### Tasks performed by Kernel

* Task Scheduling

  Linux is a _preemptive multitasking_ operating system. **Multitasking** means multiple processes can reside in memory and each may receive use of CPU(s). **Preemptive** means the rules that governs which processes receive use of the CPU and for how long are determined by the kernel process scheduler.

* Memory Management

  Linux employs **Virtual Memory Management** which isolates processes from one another and from the kernel and only keeps part of a process needed to be kept in memory which leads to better CPU utilization.
  
* Creation and termination of processes

  Kernel loads a new program into memory and provides it with necessary resources like CPU, memory. Such instance of a program is called **process**. After the program execution is completed, the kernel ensures the resourses it used are freed up.

* Access to devices

  The kernel provides programs with an interface that standardizes and simplifies access to devices, while at the same time arbitrating access by multiple processes to each device.

* Provision of a file system

  The kernel provides a **file system** on disk, which facilitates for files to be created, retrieved, updated, deleted and so on.


* Networking

  The tasks of receiving, routing and transmitting **packets** is handled by kernel.

* Provision of a system call application programming interface(API)

  Processes can request the kernel to perform various tasks using kernel entry points known as **system calls**.