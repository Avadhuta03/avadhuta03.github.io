---
layout: post
title: History of Linux
categories: Linux
comments: true
image: 
---

Linux is a member of the UNIX family of operating systems. The development of UNIX and C Programming Language led to the Linux system as it exists today: the GNU project and the development of the Linux
kernel.

 <!--continue-->

### History of UNIX

Between 1969 and 1979, UNIX went through a number of releases, known as editions.  




1. First Edition, November 1971: By this time, UNIX was running on the PDP-11 and already had a FORTRAN compiler and versions of many programs still used today, including  *ar, cat, chmod, chown, cp, dc, ed, find, ln, ls, mail, mkdir, mv,rm, sh, su, and who.*
2. Second Edition, June 1972: By this time, UNIX was installed on ten machines within AT&T.
3. Third Edition, February 1973: This edition included a C compiler and the first implementation of pipes.
4. Fourth Edition, November 1973: This was the first version to be almost totally written in C.
5. Fifth Edition, June 1974: By this time, UNIX was installed on more than 50 systems.
6. Sixth Edition, May 1975: This was the first edition to be widely used outside AT&T.




#### The birth of BSD and System V

In 1979, Seventh Edition of UNIX was released which improved the reliability of the system and provided an enhanced file system. The new tools like awk, make, sed, tar, uucp, the Bourne shell, and a FORTRAN 77 compiler were added.  

From this point, UNIX diverged into two important Variants: BSD and System V.

The version of UNIX under the name Berkeley Software Distribution (BSD) from its early full distributeion in 1979  to final release of 4.4BSD in 1993, had implemented many new tools and features like, C shell, the vi editor, an improved file system (the Berkeley Fast File System), sendmail, a Pascal compiler, virtual memory management, a complete TCP/IP implementation, including the sockets application programming interface (API) and a variety of networking tools.  


The first release of System V (five) followed in 1983, and a series of releases led to the definitive System V Release 4 (SVR4) in 1989, by which time System V had incorporated many features from BSD, including networking facilities. System V was licensed to a variety of commercial vendors, who used it as the basis of their UNIX implementations.  

System V formed the basis for several commercial implementations.



### Brief History of LINUX

Linux commonly refers to the entire UNIX-like operationg system of which Linux Kernel forms a part.


#### The GNU Project

In 1984, Richard Stallman, set to work on creating a “free” UNIX implementation. When the GNU project (a recursively defined acronym for “GNU’s not UNIX”)was started, BSD was not free and use of BSD still required a license from AT&T, and users could not freely modify and redistribute the AT&T code that formed part of BSD.  

One of the important results of the GNU project was the development of the GNU General Public License (GPL).  

Much of the software in a Linux distribution, including the kernel, is licensed under the GPL or one of a number of similar licenses. Software licensed under the GPL must be made available in source code form, and must be freely redistributable under the terms of the GPL. Modifications to GPL-licensed software are freely permitted, but any distribution of such modified software must also be under the terms of the GPL. If the modified software is distributed in executable form, the author must also allow any recipients the option of obtaining the modified source for no more than the cost of distribution. The first version of the GPL was released in 1989.

Among the well-known programs produced by the GNU project are the Emacs text editor, GCC (originally the GNU C compiler, but now renamed the, the bash shell, and glibc (the GNU C library).


By the early 1990s, the GNU project had produced a system that was virtually complete, except for one important component: a working UNIX kernel. The kernel design, GNU/HURD, based on the Mach microkernel, was very ambitious and far from being in the form to be released.


#### The Linux Kernel


In 1991, Linus Torvalds, inspired to write an operating system for his Intel 80386 PC, started on a project to create an efficient, full-featured UNIX kernel to run on the 386. Over a few months, Torvalds developed a basic kernel that allowed him to compile and run various GNU programs.  


On October 5, 1991, Torvalds requested the help of other programmers, making the announcement of version 0.02 of his kernel.  

By March 1994, the developers were able to release version 1.0. Linux 1.2 appeared in March 1995, Linux 2.0 in June 1996, Linux 2.2 in January 1999, and Linux 2.4 in January 2001. Work on the 2.5 development kernel began in November 2001, and led to the release of Linux 2.6 in December 2003.


#### Linux kernel version numbers

Linux follows a release-early, release-often model, so that new kernel revisions appear frequently. Following the release of Linux 1.0, the kernel developers adopted a kernel version numbering scheme with each release numbered x.y.z: x representing a major version, y a minor version within that major version, and z a revision of the minor version (minor improvements and bug fixes).



### Standarization


#### The C programming Language

By the early 1980s, C had been in existence for ten years, and was implemented on
a wide variety of UNIX systems and on other operating systems.  

The C standards are independent of the details of any operating system; that is, they are not tied to the UNIX system. This means that C programs written using only the standard C library should be portable to any computer and operating system providing a C implementation.


#### The First POSIX Standards

The term POSIX (an abbreviation of Portable Operating System Interface) refers to a group of standards developed under the auspices of the Institute of Electrical and Electronic Engineers (IEEE), specifically its Portable Application Standards Committee (PASC, http://www.pasc.org/). The goal of the PASC standards is to promote application portability at the source code level.

POSIX.1 and POSIX.2 are the early POSIX standards.

#### Linux, Standards, and the Linux Standard Base

Because there are multiple Linux distributors and because the kernel implementers don’t control the contents of distributions, there is no “standard” commercial Linux as such.



  
The portability problems that arose from the variations in UNIX and C implementations that existed by the late 1980s created a strong pressure for standardization. The C language was standardized in 1989 (C89), and a revised standard was produced in 1999 (C99). The first attempt to standardize the operating system interface yielded POSIX.1, ratified as an IEEE standard in 1988, and as an ISO standard in 1990. During the 1990s, further standards were drafted, including various versions of the Single UNIX Specification.