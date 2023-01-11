import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const SearchQueryParams = () => {
  const [searchQueryParams] = useSearchParams();

  const queryParams = useMemo(() => {
    const params = {};
    searchQueryParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }, [searchQueryParams]);

  console.log("QueryParams: ", queryParams);

  return (
    <>
      <p>
        I'm a search component {queryParams.name} and city: 
        {searchQueryParams.get("city")}
      </p>
    </>
  );
};

export default SearchQueryParams;