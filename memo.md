# Filtering

## Step 1

Get the data only once !

```jsx
const [playOnce, setPlayOnce] = useState(true);

useEffect(() => {
  if (playOnce) {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => {
        setData(res.data);
        setPlayOnce(false);
      });
  }

  const sortedCountry = () => {
    // Transform the array in a object => sort work only with objects
    const countryObject = Object.keys(data).map((i) => data[i]);

    const sortedArray = countryObject.sort((a, b) => {
      // Order from the biggest to the smallest
      return b.population - a.population;
    });
    sortedArray.length = rangeValue;
    setSortedData(sortedArray);
  };
  sortedCountry();
}, [data, playOnce]);
```

Copy the data in another variable sortedArray ( it's a state )
Then transform the array in a javascript obect to be able to use `sort`
Before returning the object in our jsx we can set the length ( number of result that we xant)
