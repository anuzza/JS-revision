const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
    this.locations.push(this._location);
  },
};

//code thatuses dataobjects
data.location = "Philadelphia";
data.location = "new York";
console.log(data);
