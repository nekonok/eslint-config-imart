# Differences between our rules and Airbnb's

## Versions

* eslint: <%= versions.eslint %>
* eslint-config-airbnb: <%= versions.eslint_config_airbnb %>

## Number of rules

* Airbnb's: <%= counts.airbnb %>
* Ours: <%= counts.ours %>
* Combined: <%= counts.all %>

### Changed Rules

<% _.forIn(changed, (v, k) => { %>
#### <%= k %>

[http://eslint.org/docs/rules/<%= k %>](http://eslint.org/docs/rules/<%= k %>)

Set to: `<% print(JSON.stringify(v)); %>`
<% }); %>

### Added Rules

<% _.forIn(added, (v, k) => { %>
#### <%= k %>

[http://eslint.org/docs/rules/<%= k %>](http://eslint.org/docs/rules/<%= k %>)

Set to: `<% print(JSON.stringify(v)); %>`
<% }); %>

### Supressed Rules

<% _.forIn(supressed, (v, k) => { %>
#### <%= k %>

[http://eslint.org/docs/rules/<%= k %>](http://eslint.org/docs/rules/<%= k %>)

Set to: `<% print(JSON.stringify(v)); %>`
<% }); %>
