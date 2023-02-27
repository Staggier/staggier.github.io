---
layout: post
title:  "Project Euler #91"
date:   2023-02-26 21:31:00 -0500
category: posts
excerpt: >-
  Hello and welcome to my first post
---

Hello and welcome to my first post, in these I will try to share interesting things I'll be working on which
could range from problem solving to game development.

In this post I will be highlighting my experience with [this](https://projecteuler.net/problem=91) problem.

In this problem it asks to solve for all right triangles starting from the origin `O(0, 0)` in the 
`range 0 <= x1,y1, x2,y2 <= 50`. For a while this problem seemed intimidating, I always kind of knew what I needed to solve the problem but I just wasn't sure how to go about it.

Since we already have one of the triangle's points at the origin we only need to find points `P(x1, y1)` and
`Q(x2, y2)`. To do so I simply made nested loops to test all values needed. The next challenge comes from
determining if the created triangle has a right angle in it. Luckily since a triangle only has three sides that'll only be three angles to check from our points.

An angle can be calculated like this in python:
{% highlight python %}
from math import atan2, degrees

def calculate_angle(self, a: tuple, b: tuple, c: tuple) -> tuple:
    return degrees(atan2(c[1] - b[1], c[0] - b[0]) - atan2(a[1] - b[1], a[0] - b[0])
{% endhighlight %}

It is important to note that the order of these points matter. By testing a different order of points with
this function I was able to get the angles I needed to determine if the triangle was right angled.

Now however comes another hurdle, duplicates!

With my nested loops it's very easy to have duplicate points `P` and `Q` pass the inspection and be counted, so to make sure to avoid this scenario I tried storing my triangles in a list. This proved not to work because of how inefficient searching lists can be. Even leaving my program running over night didn't yield a result, but by changing the list to a dictionary and using a hashable object, searching becomes much more efficient.

Though still not the most efficient solution, switching from lists to dictionaries made my algorithm go from running (and not finishing) overnight to finishing in a few minutes on my machine.

If you're curious about my solution you can view it [here](https://github.com/Staggier/ProjectEuler/blob/master/python/PE%23091.py).