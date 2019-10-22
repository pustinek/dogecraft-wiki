---
layout: docs
permalink: /slimefun
---

<div>
 {% for server in site.data.servers %}
    {% if server.id == "slimefun" %}
  {% for section in server.sections %}
  <section class="wiki-section" markdown="1">

  {% include /{{server.id}}/{{section.file}} %}

  </section>

     {% endfor %}
       {% endif %}
    {% endfor %}

</div>