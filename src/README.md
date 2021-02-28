# TODO

- Ver si hay algún preload content que no es utilizado
- Añadir hover a los servicios
- Yarn install en vez de npm install

Source:
https://github.com/visionscarto/some-geo-data/blob/master/ne_10m_roads.json
Convertir mapa
ndjson-cat ne_10m_roads.json | ndjson-split 'd.features' | ndjson-filter 'd.properties.continent == "South America"' | ndjson-reduce 'delete d.properties,p.features.push(d), p' '{type: "FeatureCollection", features: []}' | geo2topo roads=- > roads_4.json

