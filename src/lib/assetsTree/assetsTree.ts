export function buildTree(locations, assets) {
  const map = new Map();
  const root = [];

  addLocationsToMap(map, locations);
  addAssetsToMapWith(map, assets);

  [...locations, ...assets].forEach((item) => {
    const node = map.get(item.id);

    if (item.locationId) {
      addNodeToParent(map, node, item.locationId);
    }

    if (item.parentId) {
      addNodeToParent(map, node, item.parentId);
    }

    if (!item.locationId && !item.parentId) {
      root.push(node);
    }
  });

  return root;
}

function addLocationsToMap(map, locations) {
  locations.forEach((item) => {
    map.set(item.id, { ...item, type: "location", children: [] });
  });
}

function addAssetsToMapWith(map, assets) {
  assets.forEach((item) => {
    map.set(
      item.id,
      item.sensorType !== null
        ? { ...item, type: "component" }
        : { ...item, type: "asset", children: [] },
    );
  });
}

function addNodeToParent(map, node, parentId) {
  const parent = map.get(parentId);
  if (parent) {
    parent.children.push(node);
  }
}
