---
layout: docs
permalink: /staff
---

<div>
 {% for server in site.data.servers %}
    {% if server.id == "staff" %}
  {% for section in server.sections %}
  <section class="wiki-section" markdown="1">

  {% include /{{server.id}}/{{section.file}} %}

  </section>

     {% endfor %}
       {% endif %}
    {% endfor %}

</div>