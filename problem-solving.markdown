---
layout: default
title: Problem Solving
permalink: /problem-solving/
---

If there was anything that really got me into Computer Sciences, it'd have to be problem solving. A good friend of mine tempted me into getting into this field by introducing me to something I'd have never heard of before; Competitive Programming. 

Already competitive at heart, I really got into solving problems on sites like [Project Euler](https://projecteuler.net/) and [Kattis](https://open.kattis.com) where there's a [leaderboard](https://open.kattis.com/countries/CAN/QC) involved. With a load of variety of problems to tackle, there's no shortage of things to learn. It was this aspect that was really appealing to me. 

Although it may seem biased, here are some of my favorite problems which can all be found on Project Euler.

<ul>
{%- for problem in site.data.problems.problems -%}
<li id="{{problem.title | replace: ' ', '-' | downcase}}"><a class="problem-link" href="{{problem.link}}">{{problem.title}}</a>
<p>{{problem.description}}</p>
<p>{{problem.solution}}</p>
{% if problem.code != null %}
{% if problem.python != null %}
{% highlight python %}
{{problem.code}}
{% endhighlight %}
{% else %}
{% highlight scheme %}
{{problem.code}}
{% endhighlight %}
{% endif %}
{% endif %}
{% if problem.alt-code-link != null %}
If interested, you can view an alternate solution in my <a class="alt-code-link" href="{{problem.alt-code-link}}">github repo</a>.
{% endif %}
</li>
{%- endfor -%}
</ul>
{: .problem-list}