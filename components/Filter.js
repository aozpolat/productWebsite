import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Filter() {
  const router = useRouter();
  const minRef = useRef();
  const maxRef = useRef();

  const filter = (category) => {
    if (router.query.category) {
      const currentCategories = router.query.category;
      if (Array.isArray(currentCategories)) {
        currentCategories.push(category);
        router.push({
          pathname: "/",
          query: { ...router.query, category: currentCategories, page: 1 },
        });
      } else {
        const categoryArr = [];
        categoryArr.push(currentCategories);
        categoryArr.push(category);
        router.push({
          pathname: "/",
          query: { ...router.query, category: categoryArr, page: 1 },
        });
      }
    } else {
      router.push({
        pathname: "/",
        query: { ...router.query, category, page: 1 },
      });
    }
  };

  const removeCategoryFilter = (category) => {
    if (!Array.isArray(router.query.category))
      router.push({
        pathname: "/",
        query: { category: [] },
      });
    else {
      const newArr = router.query.category.filter((item) => item !== category);
      router.push({
        pathname: "/",
        query: { category: newArr },
      });
    }
  };

  const filterPrice = () => {
    let minPrice, maxPrice;
    if (!minRef.current.value) {
      minPrice = 0;
    } else {
      minPrice = Number(minRef.current.value);
    }

    if (!maxRef.current.value) {
      maxPrice = 9999;
    } else {
      maxPrice = Number(maxRef.current.value);
    }

    router.push({
      pathname: "/",
      query: { ...router.query, min: minPrice, max: maxPrice, page: 1 },
    });
  };

  const resetFilterPrice = () => {
    router.push({
      pathname: "/",
      query: { ...router.query, min: [], max: [], page: 1 },
    });
  };
  return (
    <div className="filter">
      <div className="headline">
        <h3>Categories</h3>
      </div>

      <div className="categories">
        <div className="option">
          <input
            type="checkbox"
            onChange={() => {
              if (
                router.query.category &&
                router.query.category.includes("shoes")
              )
                removeCategoryFilter("shoes");
              else filter("shoes");
            }}
            checked={
              router.query.category
                ? router.query.category.includes("shoes")
                : false
            }
          ></input>
          <label> Shoes</label>
          <br></br>
        </div>
        <div className="option">
          <input
            type="checkbox"
            onChange={() => {
              if (
                router.query.category &&
                router.query.category.includes("dresses")
              )
                removeCategoryFilter("dresses");
              else filter("dresses");
            }}
            checked={
              router.query.category
                ? router.query.category.includes("dresses")
                : false
            }
          ></input>
          <label> Dresses</label>
          <br></br>
        </div>
        <div className="option">
          <input
            type="checkbox"
            onChange={() => {
              if (
                router.query.category &&
                router.query.category.includes("trousers")
              )
                removeCategoryFilter("trousers");
              else filter("trousers");
            }}
            checked={
              router.query.category
                ? router.query.category.includes("trousers")
                : false
            }
          ></input>
          <label> Trousers</label>
          <br></br>
        </div>
        <div className="option">
          <input
            type="checkbox"
            onChange={() => {
              if (
                router.query.category &&
                router.query.category.includes("jackets")
              )
                removeCategoryFilter("jackets");
              else filter("jackets");
            }}
            checked={
              router.query.category
                ? router.query.category.includes("jackets")
                : false
            }
          ></input>
          <label> Jackets</label>
          <br></br>
        </div>
        <div className="option">
          <input
            type="checkbox"
            onChange={() => {
              if (
                router.query.category &&
                router.query.category.includes("shirts")
              )
                removeCategoryFilter("shirts");
              else filter("shirts");
            }}
            checked={
              router.query.category
                ? router.query.category.includes("shirts")
                : false
            }
          ></input>
          <label> Shirts</label>
          <br></br>
        </div>
      </div>
      <div className="headline">
        <h3>Price</h3>
      </div>
      <div className="price">
        <div className="priceBlock">
          <div className="priceSpan">
            <input ref={minRef} type="number" placeholder="Min"></input>
          </div>
          <div className="range"> - </div>
          <div className="priceSpan">
            <input ref={maxRef} type="number" placeholder="Max"></input>
          </div>
        </div>
        <button onClick={filterPrice}>
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </button>
      </div>
      {router.query.min ? (
        <div className="priceFilter">
          <div className="resetPriceFilter" onClick={resetFilterPrice}>
            <FontAwesomeIcon icon={faTimes} size="xs" />
          </div>
          <div className="priceFilterInfo">
            <div className="infoHeadline">Price</div>
            <div>
              {router.query.max == 9999
                ? `Above $${router.query.min}`
                : router.query.min == 0
                ? `Below $${router.query.max}`
                : `$${router.query.min} - $${router.query.max}`}
            </div>
          </div>
        </div>
      ) : null}

      <style jsx>{`
        .filter {
          position: sticky;
          top: 20px;
          height: fit-content;
          width: 12rem;
          margin: 2rem 0 0 6rem;
          border: 1px solid #e5e5e5;
          border-radius: 5px;
        }

        .headline {
          border-bottom: 1px solid;
        }

        .headline h3 {
          margin: 0.7em;
        }

        .categories {
          display: flex;
          flex-direction: column;
        }

        .option {
          display: flex;
          align-items: center;
          margin: 0.3rem 1rem;
        }

        .option input {
          margin-right: 0.5rem;
          height: 20px;
          width: 20px;
          cursor: pointer;
        }

        .price {
          display: flex;
        }

        .priceBlock {
          display: flex;
          margin-left: 0.4rem;
        }
        .priceSpan,
        .range {
          margin: 1rem 0.25rem;
        }

        .priceSpan input {
          margin-left: 0.2rem;
          width: 3rem;
          padding: 6px 8px;
          border-radius: 4px;
          border: 2px solid #bfbfbf;
        }

        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        input[type="number"] {
          -moz-appearance: textfield;
        }

        .price button {
          margin: 1rem 0.7rem;
          background: #e9e0bf;
        }

        .price button:hover {
          background: #e9d486;
          cursor: pointer;
        }

        .priceFilter {
          display: flex;
          align-items: center;
          background: #eee;
          border-radius: 27px;
          width: 60%;
          margin: 0.6rem;
          padding: 4px;
          line-height: 1.3;
        }

        .resetPriceFilter {
          margin-left: 0.1rem;
          height: 25px;
          width: 25px;
          border-radius: 100%;
          background: #fff;
          text-align: center;
          line-height: 21px;
        }

        .resetPriceFilter:hover {
          background: #484848;
          cursor: pointer;
          color: white;
        }

        .priceFilterInfo {
          font-size: 12px;
          margin-left: 0.4rem;
        }

        .infoHeadline {
          font-size: 11px;
          color: #999;
        }
      `}</style>
    </div>
  );
}
