# Excluded Rules

## Versions

* eslint: <%= versions.eslint %>
* eslint-config-airbnb: <%= versions.eslint_config_airbnb %>

## Number of rules

* exclude: <%= counts.exclude %>

### Excluded Rules

<% _.forIn(exclude, (v, k) => { %>
#### <%= k %>

[http://eslint.org/docs/rules/<%= k %>](http://eslint.org/docs/rules/<%= k %>)

Set to: `<% print(JSON.stringify(v)); %>`
<% }); %>
