const capitalize = (string) => {
  if (!string) return string; // handle undefined or null
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;
