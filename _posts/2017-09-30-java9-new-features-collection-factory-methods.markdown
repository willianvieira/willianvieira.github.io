---
layout: post
title:  "Java9 new features - collection factory methods"
date:   2017-09-30 13:00:00
categories: Java Programming Java9
---

Hi my friends, The java 9 is done ! :)

And now we have some new features how, collection factory methods

try it on jshell !


### Static factory methods

{% highlight bash %}
jshell> List<String> list = List.of("willian",
                                    "vieira",
                                    "rosa");
list ==> [willian, vieira, rosa]
{% endhighlight %}

{% highlight bash %}
jshell> List<String> list = List.of("willian",
                                    "vieira",
                                    "rosa");
list ==> [willian, vieira, rosa]
{% endhighlight %}

{% highlight bash %}
jshell> Map<String,Integer> map = Map.of("one",1,
                                        "two",2,
                                        "three",3)
map ==> {one=1, two=2, three=3}
{% endhighlight %}


### :( But it are immultable collections 
{% highlight bash %}
jshell> List<String> immutable = List.of("but",
                                        "is",
                                        "a",
                                        "immutable"
                                        ).add("list");
|  Error:
|  incompatible types: boolean cannot be converted to java.util.List<java.lang.String>
|  List<String> immutable = List.of("but", "is", "a", "immutable").add("list");
|                           ^------------------------------------------------^
{% endhighlight %}

{% highlight bash %}
jshell> List<String> immutable = List.of("but",
                                        "is", 
                                        "a", 
                                        "immutable");
immutable ==> [but, is, a, immutable]
{% endhighlight %}


It's just for today, bye !!!