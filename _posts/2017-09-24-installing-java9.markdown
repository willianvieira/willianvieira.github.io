---
layout: post
title:  "How do install java9 and JShell !"
date:   2017-09-24 12:00:00
categories: Java, Programming
---

Hi my friends, my first post is about java 9, java is my prefered language, then I show for us How to install JDK9 and JShell using update-alternatives

# 1 Download java9 jdk
{% highlight bash %}
cd /path/to/file
wget http://download.java.net/java/GA/jdk9/9/binaries/jdk-9+181_linux-x64_bin.tar.gz
{% endhighlight %}

# 2 uncompress files
{% highlight bash %}
cd /path/to/file
tar -xvf jdk-9+181_linux-x64_bin.tar.gz
{% endhighlight %}

# 3 installing this using update-alternatives
{% highlight bash %}
sudo update-alternatives --install /usr/bin/java java /path/to/file/jdk-9/bin/java 0
sudo update-alternatives --install /usr/bin/javac javac /path/to/file/jdk-9/bin/javac 0
sudo update-alternatives --install /usr/bin/jshell jshell /path/to/file/jdk-9/bin/jshell 0
{% endhighlight %}

# 4 trying your installation
{% highlight bash %}
java -version
openjdk version "9"
OpenJDK Runtime Environment (build 9+181)
OpenJDK 64-Bit Server VM (build 9+181, mixed mode)
{% endhighlight %}

It's just for today, bye !!!