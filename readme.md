# idris-geojson-model

## Usage

```
var igm = require('idris-geojson-model')
var data = require('a-geojson-collection.json')
var c = igm(data)
```

## Methods

### bbox

```
c.bbox // returns the bounding box as [minLng, minLat, maxLng, maxLat]
```

### propKeys

```
c.propKeys // returns an Array with the properties
```

### property(propertyName, orderByCount)

```
c.property('continent')
```
returns:

```
[ { value: 'Africa', count: 54 },
  { value: 'Antarctica', count: 1 },
  { value: 'Asia', count: 59 },
  { value: 'Europe', count: 51 },
  { value: 'North America', count: 42 },
  { value: 'Oceania', count: 26 },
  { value: 'Seven seas (open ocean)', count: 9 },
  { value: 'South America', count: 13 } ]
```

And 

```
c.property('continent', true)
```

returns

```
[ { value: 'Asia', count: 59 },
  { value: 'Africa', count: 54 },
  { value: 'Europe', count: 51 },
  { value: 'North America', count: 42 },
  { value: 'Oceania', count: 26 },
  { value: 'South America', count: 13 },
  { value: 'Seven seas (open ocean)', count: 9 },
  { value: 'Antarctica', count: 1 } ]
```

### .propertyTable

```
c.propertyTable
```

returns

```
[
 [ 'index', 'NAME', 'ABBREV', 'ISO_A2', 'ISO_A3', 'CONTINENT', 'SUBREGION' ]
 [ 0, 'Aruba', 'Aruba', 'AW', 'ABW', 'North America', 'Caribbean' ]
 [ 1, 'Afghanistan', 'Afg.', 'AF', 'AFG', 'Asia', 'Southern Asia' ]
 [ 2, 'Angola', 'Ang.', 'AO', 'AGO', 'Africa', 'Middle Africa' ]
 [ 3, 'Anguilla', 'Ang.', 'AI', 'AIA', 'North America', 'Caribbean' ]
 
 // ...
]
```

### .searchByProperty(key, value)

```
c.searchByProperty('continent', 'Asia') // returns a FeatureCollection
```

### .searchByProperties(key, valuesArray)

```
c.searchByProperties('continent', ['Asia', 'Africa']) // returns a FeatureCollection
```

### .searchByBbox(bbox, shouldBeCropped)

```
c.searchByBbox([0,0,10,10]) // returns a FeatureCollection with all features overlapping the bbox
```

```
c.searchByBbox([0,0,10,10], true) // returns a FeatureCollection with all features cropped to fit the bbox
```

### .geoTypes

```
c.geoTypes // returns all geometry types
```

### .separateByGeoType(multiFeaturesAsDifferentType)

```
c.separateGeoTypes()
```

returns

```
[ { type: 'Point', features: [ [Object], [Object] ] },
  { type: 'LineString', features: [ [Object], [Object] ] },
  { type: 'Polygon',
    features: [ [Object], [Object], [Object], [Object] ] } ]
```

And 

```
c.separateGeoTypes(true)
```

returns

```
[ { type: 'Point', features: [ [Object] ] },
  { type: 'LineString', features: [ [Object] ] },
  { type: 'Polygon', features: [ [Object], [Object] ] },
  { type: 'MultiPoint', features: [ [Object] ] },
  { type: 'MultiLineString', features: [ [Object] ] },
  { type: 'MultiPolygon', features: [ [Object], [Object] ] } ]
```

## Modify the model

None of the methods above change anything on the underlying model. The following do.

### .addFeature(feature)

Takes a GeoJSON feature as argument and adds it to the model

### .removeFeature(index)

Takes an index value as argument and removes it from the model

### .removeFeatures(indexes)

Takes an Array of indexes and removes them from the model

### .removeProperty(propertyToRemove)

Takes a property as argument and removes it on all features of the model

### .removeProperties(propertiesToRemove)

Takes an Array of properties as argument and removes them on all features of the model

### .setFeatureProperty(index, key, val)

Takes the index of the feature, a property key and value

### .JSON()

Returns a FeatureCollection. To be used to retrieve the new collection after the model has been modified.
